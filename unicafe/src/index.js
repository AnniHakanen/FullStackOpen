
import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.otsikko}</h1>
    )
}
const Statistics = (props) => {
    // const arvo = props.aania_huono + props.aania_hyva + props.aania_neutraali
    const summa = props.tiedot[0].arvo + props.tiedot[1].arvo + props.tiedot[2].arvo
    // console.log(arvo)
    if (summa === 0) {
        return (
            <div>
                <p>Yhtään palautetta ei ole annettu.</p>
            </div>
        )
    } else {
        return (
            <table>
                <tbody>
                    <Statistic teksti={props.tiedot[0].teksti} arvo={props.tiedot[0].arvo} merkki={""} />
                    <Statistic teksti={props.tiedot[1].teksti} arvo={props.tiedot[1].arvo} merkki={""} />
                    <Statistic teksti={props.tiedot[2].teksti} arvo={props.tiedot[2].arvo} merkki={""} />
                    <Statistic teksti={props.tiedot[3].teksti} arvo={props.tiedot[3].arvo.toFixed(2)} merkki={""} />
                    <Statistic teksti={props.tiedot[4].teksti} arvo={props.tiedot[4].arvo.toFixed(2)} merkki={"%"} />
                </tbody>
            </table>
        )
    }
}

const Statistic = (props) => {
    //palautetaan taulukon yksi rivi
    return (
        <tr>
            <td>{props.teksti}</td>
            <td>{props.arvo}</td>
            <td>{props.merkki}</td>
        </tr>
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
    // lisaaAaniHyva = () => {
    //     this.setState((prevState) => ({
    //         hyva: prevState.hyva + 1
    //     }));
    // }

    // lisaaAaniNeutraali = () => {
    //     this.setState({ neutraali: this.state.neutraali + 1 })
    // }
    // lisaaAaniHuono = () => {
    //     this.setState({ huono: this.state.huono + 1 })
    // }

    lisaaAani = (arvo) => {
        return () => {
            this.setState({ [arvo]: this.state[arvo] + 1 })

        }
    }

    keskiarvo = (hyva, neutraali, huono) => {
        let yhteensa = hyva + neutraali + huono
        let ka = 0
        ka = ((hyva * 1 + neutraali * 0 + huono * -1) / yhteensa)
        return (ka)
    }

    positiivisia = (hyva, neutraali, huono) => {
        let yhteensa = hyva + neutraali + huono
        let positiivisia = (hyva / yhteensa * 100)
        return (positiivisia)
    }

    render() {
        const tila = this.state
        const palautetaulukko = [
            {
                teksti: "Hyvä",
                arvo: tila.hyva
            },
            {
                teksti: "Neutraali",
                arvo: tila.neutraali
            },
            {
                teksti: "Huono",
                arvo: tila.huono
            },
            {
                teksti: "Keskiarvo",
                arvo: this.keskiarvo(tila.hyva, tila.neutraali, tila.huono)
            },
            {
                teksti: "Positiivisia",
                arvo: this.positiivisia(tila.hyva, tila.neutraali, tila.huono)
            }
        ]

        // console.log(palautetaulukko)

        return (
            <div>
                <Otsikko otsikko={"Anna palautetta"} />
                <Button handleClick={this.lisaaAani("hyva")} teksti="Hyvä"></Button>
                <Button handleClick={this.lisaaAani("neutraali")} teksti="Neutraali"></Button>
                <Button handleClick={this.lisaaAani("huono")} teksti="Huono"></Button>

                <Otsikko otsikko={"Statistiikka"} />
                <Statistics tiedot={palautetaulukko} />
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)