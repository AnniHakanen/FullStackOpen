// Harjoituksia ja teoriaa Full Stack Open MOOC-kurssiin
// Osa1 - JavaScriptiä
// MUUTTUJAT, TAULUKOT, OLIOT, FUNKTIOT
// Aja tiedosto terminaalista käskyllä: node Osa1.js

// MUUTTUJAT
console.log('*** MUUTTUJAT ***')

// const määrittelee vakion
const x = 1
// let määrittelee muuttujan, jonka arvoa voidaan vaihtaa, "normaalin" muuttujan
let y = 5
// var on myös mahdollinen, mutta sitä ei suositella!
var z = 0

console.log(x, y)  // tulostuu 1, 5
y += 20
console.log(x, y)  // tulostuu 1, 15
y = 'teksti'
console.log(x, y)  // tulostuu 1, teksti
// x = 4              // aiheuttaa virheen
console.log(x, y, z)

// TAULUKOT
console.log('*** TAULUKOT ***')

// taulukon sisältöä voi muuttaa vaikka on määritelty const (eli "vakioksi") - taulukko viittaa aina samaan olioon, mutta olion sisältö voi muuttua, viittaus ei
const taulukko = [1, -1, 3]

// lisää
taulukko.push(5)

// tulosta
console.log(taulukko.length)  // tulostuu 4
console.log(taulukko[1])      // tulostuu -1

// looppaa
taulukko.forEach((luku) => {
    console.log(luku)    // tulostuu 1, -1, 3 ja 5 omille riveilleen
})

// lisää tietyyyn kohtaan taulukkoa, väliin voi jäädä tyhjiä arvoja - taulukon koko muuttuu "lennosta"
taulukko[6] = 99

console.log(taulukko)         // tulostuu [ 1, -1, 3, 5, <2 empty items>, 99 ]

// Taulukon käsittely map-operaatiolla

const taulukko2 = [1, 2, 3, 4]
console.log('Taulukko2')

const m1 = taulukko2.map((luku) => luku * 2)
console.log(m1) // tulostuu [2, 4, 6, 8]

const m2 = taulukko2.map((luku) => '<li>' + luku + '</li>')
console.log(m2) // tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>4</li>' ]

// Destrukturoiva sijoituslause

const taulukko3 = [1, 2, 3, 4, 5]
console.log('Taulukko3')

const [eka, toka, ...loput] = taulukko3

console.log(eka, toka)      // tulostuu 1, 2
console.log(loput)          // tulostuu [3, 4 ,5]

//OLIOT
console.log('*** OLIOT ***')

const olio1 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori'
}

const olio2 = {
    nimi: 'Full Stack -websovelluskehitys',
    taso: 'aineopinto',
    laajuus: 5
}

const olio3 = {
    nimi: {
        etunimi: 'Jami',
        sukunimi: 'Kousa'
    },
    arvosanat: [2, 3, 5, 3],
    laitos: 'TKTL'
}

// Olion kenttien arvoihin viitataan pistenotaatiolla tai hakasulkeilla
console.log(olio1.nimi)          // tulostuu Arto Hellas
const kentanNimi = 'ika'
console.log(olio1[kentanNimi])   // tulostuu 35

// Kenttiä voi myös lisätä lennosta

olio1.osoite = 'Tapiola'
olio1['salainen numero'] = 12341

console.log(olio1.nimi)          // tulostuu Arto Hellas
const kentanNimi1 = 'osoite'
console.log(olio1[kentanNimi1])   // tulostuu Tapiola
const kentanNimi2 = 'salainen numero'
console.log(olio1[kentanNimi2])   // 12341

//FUNKTIOT
console.log('*** FUNKTIOT ***')

// Nuolifunktio "pitkän kaavan mukaan"
const summa = (p1, p2) => {
    console.log('p1 : ' + p1)
    console.log('p2 : ' + p2)
    return p1 + p2
}

// Funktion kutsu
const vastaus = summa(1, 5)
console.log('Vastaus: ' + vastaus)

// Funktion määrittely jos parametreja on vain yksi
const nelio = p => {
    console.log(p)
    return p * p
}

const nelioVastaus = nelio(8)
console.log('Vastaus (neliö): ' + nelioVastaus)

// Funktion palauttaa vain yhden lausekkeen
const nelio2 = p => p * p

const nelio2Vastaus = nelio2(8)
console.log('Vastaus (neliö2): ' + nelio2Vastaus)

//   Tämä muoto on erityisen kätevä käsiteltäessä taulukkoja esim. map-metodin avulla:
const t = [1, 2, 3]
const tnelio = t.map(p => p * p) // tnelio on nyt [1, 4, 9]

console.log('Taulukko alunperin: ' + t)
console.log('Taulukko mappauksen jälkeen: ' + tnelio)

// Määrittelytapoja on kaksi, funktiolle voidaan antaa function declaration -tyyppisessä määrittelyssä 
// nimi jonka avulla funktioon voidaan viitata:

function tulo(a, b) {
  return a * b
}
const vastaustulo = tulo(2, 6)
console.log(vastaustulo)

// Toinen tapa on tehdä määrittely funktiolausekkeena. 
// Tällöin funktiolle ei tarvitse antaa nimeä ja määrittely voi sijaita muun koodin seassa:

const keskiarvo = function(a, b) {
  return (a + b) / 2
}
const vastauska = keskiarvo(2, 5)
console.log(vastauska)

// OLIOIDEN METODIT JA THIS
console.log('*** OLIOIDEN METODIT JA THIS ***')

// Nuolifunktio-määrittely ja function-sanalla tehty määrittely poikkeaa siinä, miten 
// avainsana this käyttäytyy

// Oliolle voi lisät funktioita määrittelemällä niille kenttiä, jotka ovat funktioita

console.log('Arto 1')
const arto = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori',
    tervehdi: function () {
      console.log('Hello, my name is', this.nimi)
    }
  }
  
  arto.tervehdi()  // tulostuu hello, my name is Arto Hellas

//   Metodeja voidaan liittää olioille myös niiden luomisen jälkeen:

console.log('Arto 2')
  const arto2 = {
    nimi: 'Arto Hellas',
    ika: 35,
    koulutus: 'Filosofian tohtori',
    tervehdi: function () {
      console.log('hello, my name is', this.nimi)
    }
  }
  arto2.vanhene = function() {
    this.ika += 1
  }
  console.log(arto2.ika)  // tulostuu 35
  arto2.vanhene()
  console.log(arto2.ika)  // tulostuu 36

  console.log('Arto 3')
  const arto3 = {
    nimi: 'Arto Hellas',
    tervehdi: function () {
      console.log('hello, my name is', this.nimi)
    },
    laskeSumma: function (a, b) {
      console.log(a + b)
    }
  }
  arto3.laskeSumma(1, 4)   // tulostuu 5
  const viiteSummaan = arto3.laskeSumma
  viiteSummaan(10, 15)   // tulostuu 25

  // viitteen kautta kutsuttaessa metodi kadottaa tiedon alkuperäisestä this:istä
  arto3.tervehdi() // Hello, my name is Arto Hellas
  const viiteTervehdykseen = arto3.tervehdi
  viiteTervehdykseen() // Hello, my name is undefined

  // setTimeout kadottaa arvon
  setTimeout(arto.tervehdi, 1000)
  // bind estää katoamisen
  setTimeout(arto.tervehdi.bind(arto), 1000)

  // LUOKAT
console.log('*** LUOKAT ***')

class Henkilo {
    constructor(nimi, ika) {
      this.nimi = nimi
      this.ika = ika
    }
    tervehdi() {
      console.log('hello, my name is', this.nimi)
    }
  }
  
  const luokkaarto = new Henkilo('Arto Hellas', 35)
  luokkaarto.tervehdi()
  
  const luokkajami = new Henkilo('Jami Kousa', 21)
  luokkajami.tervehdi()
