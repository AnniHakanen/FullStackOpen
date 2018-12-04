import React from 'react'

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

export default Kurssit