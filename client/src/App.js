import React from "react";
import BlockTextInput from "./components/BlockTextInput";
import "./App.css";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Parsley</h1>
				<p>
					Parsley is a project by Ian Erickson with the intention of sending
					block text as an sms message.
				</p>
				<BlockTextInput />
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
