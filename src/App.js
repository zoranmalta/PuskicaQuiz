import logo from './logo.svg';
import './App.css';
import Navbar from './layout/Navbar';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<p className='text-[33px] bg-slate-400'>New added text</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
