class Homepage extends React.Component {
	render(){
		return <div>
        <h2>Welcome user!</h2>
        <img src="/static/img/balloonicorn.jpg" /> 
        <h2><a href="/cards">Trading Cards!</a></h2>
        </div>
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));