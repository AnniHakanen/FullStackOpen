import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
    )
}
const Osa = (props) => {
    return (
        <div>
            {props.osa}, tehtäviä: {props.tehtavia}
        </div>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            {/* <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
            <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
            <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} /> */}
            <ul>
                {props.osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
            </ul>
        </div>
    )
}
const Yhteensa = (props) => {
    // console.log('REDUCE')
    var tehtavienSumma = props.osat.reduce(function (sum, osa) {
        return sum + osa.tehtavia
    }, 0)
    // console.log(tehtavienSumma)
    return (
        <p>Yhteensä {tehtavienSumma} tehtävää</p>
    )
}
const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            <Sisalto osat={props.kurssi.osat} />
            <Yhteensa osat={props.kurssi.osat} />
        </div>)
}
const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            },
            {
                nimi: 'Sovelluksen alustus ja rakenne',
                tehtavia: 21,
                id: 4
            }
        ]
    }

    return (
        <div>
            {/* <Otsikko kurssi={kurssi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} /> */}
            <Kurssi kurssi={kurssi} />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)