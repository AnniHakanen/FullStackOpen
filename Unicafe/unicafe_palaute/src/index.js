
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            <p>{props.teksti1}: {props.aania_hyva}</p>
            <p>{props.teksti2}: {props.aania_neutraali}</p>
            <p>{props.teksti3}: {props.aania_huono}</p>
        </div>
    )
}
const Painike = (props) => {
    return (
        <button onClick={props.toiminto}>{props.teksti}</button>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    lisaaAaniHyva = () => {
        this.setState({ hyva: this.state.hyva + 1 })
    }
    lisaaAaniNeutraali = () => {
        this.setState({ neutraali: this.state.neutraali + 1 })
    }
    lisaaAaniHuono = () => {
        this.setState({ huono: this.state.huono + 1 })
    }

    render() {
        return (
            <div>
                <Otsikko otsikko={"Anna palautetta"} />

                <Painike toiminto={this.lisaaAaniHyva} teksti="Hyvä"></Painike>
                <Painike toiminto={this.lisaaAaniNeutraali} teksti="Neutraali"></Painike>
                <Painike toiminto={this.lisaaAaniHuono} teksti="Huono"></Painike>

                <Otsikko otsikko={"Statistiikka"} />

                <Sisalto
                    teksti1={"Hyvä"} aania_hyva={this.state.hyva}
                    teksti2={"Neutraali"} aania_neutraali={this.state.neutraali}
                    teksti3={"Huono"} aania_huono={this.state.huono} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

