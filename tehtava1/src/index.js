import React from 'react'
import ReactDOM from 'react-dom'

const Kurssit = (props) => {
    return (
        <div>
            {props.kurssiluettelo.map(yksittainenKurssi =>
                <Kurssi key={yksittainenKurssi.id} kurssi={yksittainenKurssi} osat={yksittainenKurssi.osat} />)}
        </div>
    )
}
const Kurssi = (props) => {
    return (
        <div>
            <Otsikko kurssi={props.kurssi} />
            {/* <h1>{props.kurssi.nimi}</h1> */}
            <Sisalto osat={props.osat} />
            <Yhteensa osat={props.osat} />
        </div>)
}
const Otsikko = (props) => {
    return (
        <h1>{props.kurssi.nimi}</h1>
    )
}
const Sisalto = (props) => {
    return (
        <ul>
            {/* <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia} />
            <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia} />
            <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia} /> */}
            {props.osat.map(osa => <Osa key={osa.id} osa={osa.nimi} tehtavia={osa.tehtavia} />)}
        </ul>
    )
}
const Osa = (props) => {
    return (
        <li>
            {props.osa}, tehtäviä: {props.tehtavia}
        </li>
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
const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
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
        },
        {
            nimi: 'Noje.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]
    // console.log('Kurssiluettelo: ', kurssit)
    return (
        <div>
            <h1>Opetusohjelma</h1>
            {/* <Otsikko kurssi={kurssi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} /> */}
            <Kurssit kurssiluettelo={kurssit} />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)