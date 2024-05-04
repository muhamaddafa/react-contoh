import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Page/Homepage";
import About from "./Page/About";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
