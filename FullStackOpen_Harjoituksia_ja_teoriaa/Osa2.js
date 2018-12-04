console.log('**** TAULUKOIDEN KÄSITTELYÄ ***')

console.log('FILTER')

var elaimet = [
    { nimi: 'Nella', laji: 'koira', ika: 2 },
    { nimi: 'Boo', laji: 'rotta', ika: 2 },
    { nimi: 'Hani', laji: 'rotta', ika: 2 },
    { nimi: 'Blini', laji: 'koira', ika: 2 },
    { nimi: 'Poni', laji: 'koira', ika: 2 },
    { nimi: 'Hula', laji: 'rotta', ika: 2 },
    { nimi: 'Pottu', laji: 'rotta', ika: 2 }
]

// Käsittely for-silmukalla
var rotat1 = []
for (var i = 0; i < elaimet.length; i++) {
    if (elaimet[i].laji === 'rotta')
        rotat1.push(elaimet[i])
}
console.log('FOR-silmukasta: ', rotat1)

// Käsittely Filter-funktiolla
var rotat2 = elaimet.filter(function (elain) {
    return elain.laji === 'rotta'
})
console.log('Filter-funktiosta: ', rotat2)

// Filter lyhyemmin - Nuolifunktio
var rotat3 = elaimet.filter((elain) => elain.laji === 'rotta')
console.log('Filter-funktiosta: ', rotat3)

var onRotta = function (elain) {
    return elain.laji === 'rotta'
}
var onKoira = function (elain) {
    return elain.laji === 'koira'
}

var rotat4 = elaimet.filter(onRotta)
var koirat1 = elaimet.filter(onKoira)

console.log('Eriteltynä, rotat: ', rotat4)
console.log('Eriteltynä, koirat: ', koirat1)

console.log('MAP')

var nimet = elaimet.map(function (elain) {
    return elain.nimi
})
// Sama nuolifunktiona
var nimet2 = elaimet.map((elain) => elain.nimi)

console.log('Nimet: ', nimet, nimet2)

// Mappaaminen lisäämällä 
var nimet3 = elaimet.map((elain) => elain.nimi + ' On ' + elain.laji)

console.log(nimet3)

console.log('REDUCE')
// Voit "tehdä oman funktion"
var ikienSumma = elaimet.reduce(function (sum, elain) {
    return sum + elain.ika
}, 0)

console.log(ikienSumma)

