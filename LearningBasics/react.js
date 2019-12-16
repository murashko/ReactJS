function Card(props) {
	const classNames = `card ${props.car.isMarked ? "marked" : ""}`;
	return (
		<div className={classNames} onClick={props.onClick} >
			<div className="card-img">
				<img
					src={props.car.img}
					alt={props.car.name} />
			</div>
			<h3>{props.car.name}</h3>
			<p>{props.car.price} $</p>
		</div>
	)
}

class App extends React.Component {

	state = {
		cars: [
			{ name: "BMW M2 Coupe", isMarked: false, price: 20000, img: "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg" },
			{ name: "Audi TT", isMarked: false, price: 15000, img: "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598" },
			{ name: "Rolls Royce", isMarked: false, price: 50000, img: "http://a2goos.com/data_images/models/rolls-royce-phantom-coupe/rolls-royce-phantom-coupe-03.jpg" },
			{ name: "Mercedes Amg Coupe", isMarked: false, price: 18000, img: "https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2" },
		],
		visible: true,
		appTitle: "Cars app"
	}

	onCardClicked(carName) {
		const cars = this.state.cars.concat();
		const car = cars.find(c => c.name === carName);
		if (car) {
			car.isMarked = !car.isMarked;
		}

		this.setState(cars);
	}

	renderCars() {
		if (!this.state.visible) {
			return;
		}
		
		return this.state.cars.map(car => {
			return (
				<Card
					car={car}
					key={car.name + Math.random()}
					onClick={this.onCardClicked.bind(this, car.name)}
				/>
			)
		});
	}

	toggleHandler() {
		this.setState({visible: !this.state.visible})
	}

	titleChangeHandler(title) {
		if (title.trim() === "") {
			return;
		}
		this.setState({ appTitle: title });
	}

	render() {
		const style = {
			marginRight: 5
		}
		return (
			<div className="app">
				<h1>{this.state.appTitle}</h1>
				<button 
					onClick={() => this.toggleHandler()}
					style={style}>Toogle
				</button>
				<input
					type="text" 
					placeholder="Change title"
					onChange={(event) => this.titleChangeHandler(event.target.value)}
					value={this.state.appTitle}
				/>
				<hr></hr>
				<div className="list">				
					{this.renderCars()}
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));