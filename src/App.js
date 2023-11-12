import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import Menu from "./pages/Menu"
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <>
      <Router>
		<Routes>
			<Route
				exact
				path="/"
				element={<Home />}
			/>
			<Route
				path="/menu"
				element={<Menu />}
			/>
			<Route
				path="/about-us"
				element={<AboutUs />}
			/>
			<Route
				path="*"
				element={<Navigate to="/" />}
			/>
		</Routes>
	</Router>
    </>
  );
}

export default App;
