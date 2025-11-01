import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Image, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { Camera, CameraView, CameraType, CameraCapturedPicture } from "expo-camera";

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasLocationPermission, setHasLocationPermission] = useState<boolean | null>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture | null>(null);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const cameraRef = useRef<CameraView | null>(null);

  // Pedir permisos al montar el componente
  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");

      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(locationStatus === "granted");

      if (locationStatus !== "granted") {
        Alert.alert("Permiso de ubicación denegado");
      }
    })();
  }, []);

  // Obtener la ubicación actual
  const getLocation = async () => {
    if (!hasLocationPermission) return;
    const loc = await Location.getCurrentPositionAsync({});
    setLocation(loc);
  };

  // Tomar una foto
  const takePhoto = async () => {
    if (cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync();
      setPhoto(picture);
      await getLocation();
    }
  };

  if (hasCameraPermission === null) {
    return (
      <View>
        <Text>Solicitando permisos...</Text>
      </View>
    );
  }

  if (hasCameraPermission === false) {
    return (
      <View>
        <Text>Permiso de cámara denegado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!photo ? (
        <>
          <CameraView ref={cameraRef} style={styles.camera} />
          <Button title="📸 Tomar foto" onPress={takePhoto} />
        </>
      ) : (
        <>
          <Image source={{ uri: photo.uri }} style={styles.preview} />
          {location && (
            <Text style={styles.info}>
              Ubicación: {"\n"}
              Lat: {location.coords.latitude.toFixed(5)} {"\n"}
              Lon: {location.coords.longitude.toFixed(5)}
            </Text>
          )}
          <Button title="🔄 Volver a tomar" onPress={() => setPhoto(null)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    width: "90%",
    height: "70%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  preview: {
    width: "90%",
    height: "70%",
    borderRadius: 20,
    marginBottom: 20,
  },
  info: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
});
