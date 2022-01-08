import * as React from 'react';
import axios from 'axios';
import config from '../config/config.local';

const ActionButton = ({ action, children }) => {
	const [loading, setLoading] = React.useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setLoading('false')
		axios.get(`${config.apiEndpoint}/?action=${action}`)
			.then(response => {
				console.log('response', response);
				setLoading(false);
			});
	}
	return (
		<button
			disabled={loading === true}
			onClick={handleClick}
			className={'bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded'}
		>
			{loading === false ? children : '...'}
		</button>
	);
};

export default ActionButton;
