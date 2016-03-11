class App extends React.Component {
	render() {
		const message = "Hello mates";
		return (
			<p>{message}</p>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);