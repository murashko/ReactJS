function Card(props) {
    return (
        <div className="card">
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
            {name: "BMW M2 Coupe", price: 20000, img: "https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg"},
            {name: "Audi TT", price: 15000, img: "https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598"},
            {name: "Rolls Royce", price: 50000, img: "http://a2goos.com/data_images/models/rolls-royce-phantom-coupe/rolls-royce-phantom-coupe-03.jpg"},
            {name: "Mercedes Amg Coupe", price: 18000, img: "https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2"},
        ]
    }

    renderCars() {
        return this.state.cars.map(car => {
            return (
                <Card car={car} key={car.name + Math.random()} />
            )
        });
    }

    render() {
        return (
            <div className="app">
                <div className="list">
                    { this.renderCars() }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));