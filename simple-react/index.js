class App extends React.Component {
	render() {
			const message = "Hello ol' friend";
			return (
					<p>{message}</p>
			);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);