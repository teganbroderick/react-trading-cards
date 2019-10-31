class TradingCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h2>Name: {this.props.name}</h2>
				<img src={this.props.imgUrl} />
				<h2>Skill: {this.props.skill}</h2>
			</div>
		);
	}
}

ReactDOM.render(
	<TradingCard name="Balloonicorn" skill="video games" imgUrl="/static/img/balloonicorn.jpg" />, 
	document.getElementById('balloonicorn') 
);

ReactDOM.render(
	<TradingCard name="Float" skill="sychronized swimming" imgUrl="/static/img/float.jpg" />,
	document.getElementById('float')
);

ReactDOM.render(
	<TradingCard name="Llambda" skill="knitting scarves" imgUrl="/static/img/llambda.jpg" />,
	document.getElementById('llambda')
);

ReactDOM.render(
	<TradingCard name="Seedy" skill="seed spitting contest winner" imgUrl="/static/img/seedpy.jpg" />,
	document.getElementById('seedy')
);

ReactDOM.render(
	<TradingCard name="Shortstack" skill="butter and syrup connoisseur" imgUrl="/static/img/shortstack-overflow.jpg" />,
	document.getElementById('shortstack')
);