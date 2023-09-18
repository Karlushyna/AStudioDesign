import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Cases from "./components/Cases/Cases";
import Form from "./components/Form/Form";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";


function App() {
  useEffect(() => {
		import("lightbox2/dist/js/lightbox.min.js").then((Lightbox) => {
			import("lightbox2/dist/css/lightbox.min.css");
		});
	}, []);
	return (
		<>
			<Navbar />
			<Routes>
				<Route index element={<Hero />} />
				<Route path='/about' element={<About/>} />
				<Route path='/blog' element={<Blog/>} />
				<Route path='/cases' element={<Cases/>} />
				<Route path='/team' element={<Team/>} />
				<Route path='/form' element={<Form/>} />




      {/* <Hero /> */}
      {/* <About/> */}
      {/* <Cases/> */}
      {/* <Blog/> */}
      {/* <Team/> */}
      {/* <Form/> */}
      </Routes>
      <Footer/>
		</>
	);
}

export default App;
