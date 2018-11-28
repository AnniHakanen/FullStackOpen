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
            <p> Hyvä: {props.hyva}
            <p> Neutraali: {props.neutraali}
            <p> Huono: {props.huono}
        </div>
    )
}
{/* const Yhteensa = (props) => {

    return (
        <p>yhteensä {props.yhteensa} tehtävää</p>
    )
} */}
const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }
    return (
        <div>
            <Otsikko otsikko={kurssi.nimi} />

            <Sisalto
                osa1={kurssi.osat[0].nimi} tehtavia1={kurssi.osat[0].tehtavia}
                osa2={kurssi.osat[1].nimi} tehtavia2={kurssi.osat[1].tehtavia}
                osa3={kurssi.osat[2].nimi} tehtavia3={kurssi.osat[2].tehtavia}
            />
            <Yhteensa yhteensa={kurssi.osat[0].tehtavia + kurssi.osat[1].tehtavia + kurssi.osat[2].tehtavia} />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)