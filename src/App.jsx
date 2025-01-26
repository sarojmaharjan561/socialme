// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
	//   const [count, setCount] = useState(0)

	return (
		<div className="app-container">
			<Sidebar></Sidebar>
			<div className="content">
				<Header></Header>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
