
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
    // console.log(props)
    const {handleClick, teksti} = props
    return (
        <button onClick={handleClick}>
        {teksti}
        </button>
    )
}

// Luokka
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    // lisaaAaniHyva = () => {
    //     this.setState({ hyva: this.state.hyva + 1 })
    // }

    // prevStaten käyttäminen
    lisaaAaniHyva = () => {
        this.setState((prevState) => ({
            hyva: prevState.hyva + 1
        }));
    }

    lisaaAaniNeutraali = () => {
        this.setState({ neutraali: this.state.neutraali + 1 })
    }
    lisaaAaniHuono = () => {
        this.setState({ huono: this.state.huono + 1 })
    }

    render() {
        const tila = this.state

        return (
            <div>
                <Otsikko otsikko={"Anna palautetta"} />

                <Painike handleClick={this.lisaaAaniHyva} teksti="Hyvä"></Painike>
                <Painike handleClick={this.lisaaAaniNeutraali} teksti="Neutraali"></Painike>
                <Painike handleClick={this.lisaaAaniHuono} teksti="Huono"></Painike>

                <Otsikko otsikko={"Statistiikka"} />

                <Sisalto
                    teksti1={"Hyvä"} aania_hyva={tila.hyva}
                    teksti2={"Neutraali"} aania_neutraali={tila.neutraali}
                    teksti3={"Huono"} aania_huono={tila.huono} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

