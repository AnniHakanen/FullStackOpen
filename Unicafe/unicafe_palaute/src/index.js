
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}
const Statistics = (props) => {
    const arvo = props.aania_huono + props.aania_hyva + props.aania_neutraali
    console.log(arvo)
    if (arvo === 0) {
        return (
            <div>
                <p>Yhtään palautetta ei ole annettu.</p>
                <p>Anna palautetta nappuloilla.</p></div>
        )
    }
    
    return (
        <div>
            <Statistic teksti={props.teksti1} arvo={props.aania_hyva} merkki={""} />
            <Statistic teksti={props.teksti2} arvo={props.aania_neutraali} merkki={""} />
            <Statistic teksti={props.teksti3} arvo={props.aania_huono} merkki={""} />
            <Statistic teksti={props.teksti4} arvo={props.keskiarvo} merkki={""} />
            <Statistic teksti={props.teksti5} arvo={props.prosentti} merkki={"%"} />
        </div>
    )
        }
const Statistic = (props) => {
    return (
        <p>{props.teksti}: {props.arvo} {props.merkki}</p>
    )
}
const Button = (props) => {
    // console.log(props)
    const { handleClick, teksti } = props
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
            huono: 0,
            keskiarvo: 0
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

    keskiarvo = (hyva, neutraali, huono) => {
        let yhteensa = hyva + neutraali + huono
        let ka = 0
        ka = ((hyva * 1 + neutraali * 0 + huono * -1) / yhteensa)
        return (ka)
    }

    positiivisia = (hyva, neutraali, huono) => {
        let yhteensa = hyva + neutraali + huono
        let positiivisia = hyva / yhteensa * 100
        return (positiivisia)
    }

    render() {
        const tila = this.state

        return (
            <div>
                <Otsikko otsikko={"Anna palautetta"} />

                <Button handleClick={this.lisaaAaniHyva} teksti="Hyvä"></Button>
                <Button handleClick={this.lisaaAaniNeutraali} teksti="Neutraali"></Button>
                <Button handleClick={this.lisaaAaniHuono} teksti="Huono"></Button>

                <Otsikko otsikko={"Statistiikka"} />

                <Statistics
                    teksti1={"Hyvä"} aania_hyva={tila.hyva} 
                    teksti2={"Neutraali"} aania_neutraali={tila.neutraali} 
                    teksti3={"Huono"} aania_huono={tila.huono} 

                    teksti4={"Keskiarvo"} 
                    keskiarvo={this.keskiarvo(tila.hyva, tila.neutraali, tila.huono)} 
                    teksti5={"Positiivisia"} 
                    prosentti={this.positiivisia(tila.hyva, tila.neutraali, tila.huono)} 
                />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)