import Footer from "./components/Footer/Footer";
import Titlebar from "./components/Titlebar/Titlebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Topbar />
      <Titlebar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
