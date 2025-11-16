import { Route, Switch } from "wouter";
import Footer from "./components/Footer/Footer";
import Titlebar from "./components/Titlebar/Titlebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Shows from "./pages/Shows/Shows";

function App() {
  return (
    <>
      <Topbar />
      <Titlebar />
      <main>
        <Switch>
          {/* Add routes here if needed */}
          <Route path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/shows" component={Shows} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
