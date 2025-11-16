// src/services/mediaService.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mockData } from '../__mocks__/mockData';

// --- PASO 1: Mockear el Módulo del JSON ---
// Mockeamos la dependencia de bajo nivel del servicio. 
// Esto resuelve el error de hoisting.
vi.mock('../data/sample.json', () => ({ default: mockData }));

// --- PASO 2: Importar las funciones después del mocking ---
// Ahora podemos importar las funciones del servicio, ya que su dependencia (sample.json) está mockeada.
import { fetchMovies, fetchShows } from './index'; // Asumiendo que tus funciones están en index.ts

// 3. Usar Timers Falsos
// Esto nos permite controlar el setTimeout y evitar esperar 500ms reales
vi.useFakeTimers();

describe('Media Service', () => {
    
    // Antes de cada test, reseteamos los timers para que estén limpios
    beforeEach(() => {
        vi.clearAllTimers();
    });

    // --- Test 1: fetchMovies ---
    it('debería resolver la promesa y retornar solo programas de tipo "movie"', async () => {
        // Ejecutar el mock del setTimeout
        const promise = fetchMovies();
        vi.advanceTimersByTime(500);

        // Esperar a que la promesa se resuelva
        const result = await promise;

        // Comprobación de resultados
        expect(result).toHaveLength(2);
        expect(result[0].programType).toBe('movie');
        expect(result[1].programType).toBe('movie');
        expect(result.every(item => item.programType === 'movie')).toBe(true);
    });

    // --- Test 2: fetchShows ---
    it('debería resolver la promesa y retornar solo programas de tipo "series"', async () => {
        // Ejecutar el mock del setTimeout
        const promise = fetchShows();
        vi.advanceTimersByTime(500);
        
        // Esperar a que la promesa se resuelva
        const result = await promise;

        // Comprobación de resultados
        expect(result).toHaveLength(1);
        expect(result[0].programType).toBe('series');
        expect(result.every(item => item.programType === 'series')).toBe(true);
    });

    // --- Test 3: Comprobación de Asincronía ---
    it('debería esperar 500ms para resolver (simulación asíncrona)', async () => {
        const fetchSpy = vi.fn();
        fetchMovies().then(fetchSpy);

        // En este punto (0ms), la función no debe haber sido llamada todavía.
        expect(fetchSpy).not.toHaveBeenCalled();

        // Avanzamos el tiempo justo hasta el final del delay
        vi.advanceTimersByTime(499);
        expect(fetchSpy).not.toHaveBeenCalled();

        // Avanzamos 1ms más, lo que activa el setTimeout
        vi.advanceTimersByTime(1);
        
        // La promesa debe resolverse y llamar a la función mockeada
        await vi.runOnlyPendingTimersAsync();
        expect(fetchSpy).toHaveBeenCalled();
    });
});