import Footer from "./components/Footer/Footer";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Topbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
