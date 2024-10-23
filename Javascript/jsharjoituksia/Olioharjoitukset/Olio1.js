// C01 & C02 & C03
// 
class Henkiloluokka {
    constructor(etunimi, sukunimi, ika) {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
    naytaTiedot() {
        console.log(`etunimi: ${this.etunimi}, sukunimi ${this.sukunimi}, ika ${this.ika}`)
    }
}
const risto = new Henkiloluokka("Risto", "Reipas", 10);
risto.sukunimi ="Reippaampi";
risto.ika = 11;
console.log("Etunimi:", risto.etunimi);
console.log("Sukunimi:", risto.sukunimi);
console.log("Ikä:", risto.ika);
risto.naytaTiedot();
// C04
// 
class Kuvakirja {
    #SivujenLukumaara;
    constructor(sivumaara = 16) {
        this.#SivujenLukumaara = sivumaara;
    }
    HaeSivumaara() {
        return this.#SivujenLukumaara;
    }
}
const kuvakirjaOletus = new Kuvakirja();
console.log("Oletussivumäärä: " + kuvakirjaOletus.HaeSivumaara());
const kuvakirjaMukautettu = new Kuvakirja(24);
console.log("Mukautettu sivumäärä: " + kuvakirjaMukautettu.HaeSivumaara());
// C05
// 
class Elain {
    constructor(nimi = "kana") {
        this._nimi = nimi;
    }
    get nimi() {
        return this._nimi;
    }
    set nimi(uusiNimi) {
        this._nimi = uusiNimi;
    }
    Syo() {
        console.log(this._nimi + " syö - mumm mumm mum");
    }
}
const kana = new Elain();
console.log("Olio kana, nimi: " + kana.nimi);
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " +kana.nimi);
kana.Syo();
// C06
// 
class Koira extends Elain {
    constructor(nimi = "", tassut = 4, turkki = "") {
        super(nimi);
        this._tassut = tassut;
        this._turkki = turkki;
    }
    get tassut() {
        return this._tassut;
    }
    set tassut(uudetTassut) {
        this._tassu = uudetTassut;
    }
    get turkki() {
        return this._turkki;
    }
    set turkki(uusiTurkki) {
        this._turkki = uusiTurkki;
    }
    Aantelehtii(aani) {
        console.log(this._nimi + " " + aani);
    }
}
const koira = new Koira("Haukkuja");
console.log("Olio koira, nimi: " + koira.nimi);
console.log("Tassujen määrä: " + koira.tassut);
koira.nimi = "Rafu";
koira.tassut = 3;
console.log("Koiran uusi nimi: " + koira.nimi);
console.log("Tassujen uusi määrä: " + koira.tassut);
koira.Aantelehtii("haukkuu");
// C07 & C08
// 
class Ajoneuvo {
    constructor(merkki, malli, vuosimalli) {
        this._merkki = merkki;
        this._malli = malli;
        this._vuosimalli = vuosimalli;
    }
    get merkki() {
        return this._merkki;
    }
    set merkki(uusiMerkki) {
        this._merkki = uusiMerkki;
    }
    
    get malli() {
        return this._malli;
    }
    set malli(uusiMalli) {
        this._malli = uusiMalli;
    }
    get vuosimalli() {
        return this._vuosimalli;
    }
    set vuosimalli(uusiVuosimalli) {
        this._vuosimalli = uusiVuosimalli;
    }
    aja() {
        console.log("Ajetaan ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    kiihdyta() {
        console.log("Kiihdytetään ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    jarruta() {
        console.log("Jarrutetaan ajoneuvoa: " + this._merkki + " " + this._malli);
    }
    kaynnista() {
        console.log("Käynnistetään ajoneuvo: " + this._merkki + " " + this._malli);
    }
    sammuta() {
        console.log("Sammutetaan ajoneuvo: " + this._merkki + " " + this._malli);
    }
}
class Auto extends Ajoneuvo {
    constructor(merkki, malli, vuosimalli, pyorat = 4) {
        super(merkki, malli, vuosimalli);
        this._pyorat = pyorat;
    }
}
class Moottoripyora extends Auto {
    constructor(merkki, malli, vuosimalli, pyorat = 2) {
        super(merkki, malli, vuosimalli);
        this._pyorat = pyorat;
    }

}
class Testiajo {
    constructor() {
        const mersu = new Auto("Mercedes-Benz", "Sarja S", 2023);
        const moottoripyora = new Moottoripyora("Kawasaki", "NinjaH2", 2024);
        mersu.aja();
        console.log("Pyörien määrä " + mersu._pyorat);
        moottoripyora.aja();
        console.log("Pyörien määrä " + moottoripyora._pyorat);
    }
}
const testiAjo = new Testiajo();
// C09
// 
class Pankkitili {
    constructor() {
        this.saldo = 0;
    }
    talleta(maara) {
        if (maara > 0) {
            this.saldo += maara;
            console.log(`Tallennettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa`);  
        } else {
            console.log("Tallettava määrä on virheellinen.");
        }
    }
    nosta(maara) {
        if (maara > 0) {
            if (maara <= this.saldo) {
                this.saldo -= maara;
                console.log(`Nostettu ${maara} euroa. Uusi saldo: ${this.saldo} euroa.`)
            } else {
                console.log("nostettava määrä ylittää tilin saldon.");
            }
        } else {
            console.log("Nostettava määrä on virheelline.")
        }
    }
}
const tili = new Pankkitili();
tili.talleta(100);
tili.nosta(50);
tili.nosta(70);
tili.talleta(-20);
// C10
// 
class Elaimet {
    constructor(nimi) {
        this.nimi = nimi;
    }

    aanesta() {
        console.log(`${this.nimi} tekee ääntä`);
    }
}
class Dogi extends Elaimet {
    aanesta() {
        console.log(`${this.nimi} haukkuu: Woof Woof!`);

    }
}
class Lintu extends Elaimet {
    aanesta() {
        console.log(`${this.nimi} laulaa: La la laa!`)
    }
}
class Kala extends Elaimet {
    aanesta() {
        console.log(`${this.nimi} vedessä luikertelee`)
    }
}
const sulo = new Dogi("Sulo");
const tintti = new Lintu("Tintti");
const nemo = new Kala("Nemo");

sulo.aanesta();
tintti.aanesta();
nemo.aanesta();
// C11
// 
class Kirja {
    constructor(nimi, kirjailija) {
        this.nimi = nimi;
        this.kirjailija = kirjailija;
    }
}
class Kirjasto {
    constructor() {
        this.kirjat = [];
    }
    lisaaKirja(kirja) {
        this.kirjat.push(kirja);
    }
    haeKirjat (kirjailija) {
        return this.kirjat.filter(kirja => kirja.kirjailija === kirjailija);
    }
}
const kirjasto1 = new Kirjasto();
const kirja1 = new Kirja("Taru Sormusten herrasta", "J. R. R. Tolkien");
const kirja2 = new Kirja("Muuntohiili", "Richard Morgan");
kirjasto1.lisaaKirja(kirja1);
kirjasto1.lisaaKirja(kirja2);
console.log(kirjasto1.haeKirjat("Richard Morgan"));
// C12
// 
class Car {
    constructor(merkki, malli, vuosi) {
        this.merkki = merkki;
        this.malli = malli;
        this.vuosi = vuosi
    }
    autonTiedot() {
        console.log(`Auton merkki: ${this.merkki} malli: ${this.malli} vuosimalli: ${this.vuosi}.`)
    }
}
const auto1 = new Car("Fiat", "Stilo", 2008);
auto1.autonTiedot();
// C13
// 
class Animal {
    constructor(nimi, ika) {
        this.nimi = nimi;
        this.ika = ika;
    }
    aani() {
        console.log(`Eläin tekee äänen`)
    }
}
const koira1 = new Animal("Piki", 4);
koira1.aani();
// C14
class Nelio {
    constructor(sivu_pituus) {
        this.sivu_pituus = sivu_pituus;
    }
    nelionAlue() {
        return this.sivu_pituus * this.sivu_pituus;
    }
}
const nelio = new Nelio(5);
console.log(nelio.nelionAlue());
// C15
// 
class Kayttaja {
    constructor(nimi, sahkoposti) {
        this.nimi = nimi;
        this.sahkoposti = sahkoposti;
    }
    tervehdys() {
        console.log(`Hei ${this.nimi}`);
    }
}
const kayttaja1 = new Kayttaja("Teppo", "teppo@malli.com");
kayttaja1.tervehdys();
// C16
// 
class Kirjoja {
    constructor(otsikko, kirjailija, sivumaara) {
        this.otsikko = otsikko;
        this.kirjailija = kirjailija;
        this.sivumaara = sivumaara;
    }
    kirjojaTiedot() {
    console.log(`Otsikko ${this.otsikko}, kirjailija ${this.kirjailija}, sivumaara${this.sivumaara}`);
    }
}
const uusikirja = new Kirjoja('Tuntematon Sotilas', 'Väinö Linna', 490);
uusikirja.kirjojaTiedot();
// C17
// 
class Animals1 {
    constructor(nimi) {
        this.nimi = nimi;
    }
    aani() {
        console.log('Eläin tekee äänen');
    }
}
class Koirat extends Animals1 {
    aani() {
        console.log("Koira sanoo: Wuf wuf!")
    }
}
class Kissat extends Animals1 {
    aani() {
        console.log("Kissa sanoo; miauuu!")
    }
}
const kissa = new Kissat("Karvinen")
kissa.aani();
const Dog = new Koirat("Wuhveli")
Dog.aani();
// C18
// 
class Vehicle {
    constructor(nimi) {
        this.nimi = nimi;
    }
    käynnistä() {
        console.log("Ajoneuvo starttaa");
    }
    sammuta() {
        console.log("Ajoneuvo sammuuu");
    }
}
class Cars extends Vehicle {
    kaynnista() {
        console.log("Auto starttaa");
    }
    sammuta() {
        console.log("Auto sammuu");
    }
}
class Polkupyora extends Vehicle {
    kaynnista() {
        console.log("Polkupyörää ei tarvitse käynnistää")
    }
    sammuta() {
        console.log("Eikä tarvitse sammuttaa")
    }
}
const tesla = new Cars;
tesla.kaynnista();
tesla.sammuta();
const fillari = new Polkupyora;
fillari.kaynnista();
fillari.sammuta();
// C19
// 
class Henkilo {
    constructor(nimi, ika) {
        this.nimi = nimi;
        this.ika = ika;
    }
    esittely() {
        console.log(`Hei, nimeni on ${this.nimi} ja olen ${this.ika} vuotta vanha.`);
    }
}
class Opiskelija extends Henkilo {
    constructor(nimi, ika, opiskelijanumero) {
        super(nimi, ika);
        this.opiskelijanumero = opiskelijanumero;
    }
    esittely() {
        super.esittely();
        console.log(`Opiskelijanumeroni on ${this.opiskelijanumero}.`);
    }
}
const opiskelija = new Opiskelija("Jussi", 22, "1234")
opiskelija.esittely();
// C20
// 
class Eletroniikka {
    constructor(nimi) {
        this.nimi = nimi;
    }
    käynnistä() {
        console.log("Laite menee päälle");
    }
    sammuta() {
        console.log("Laite sammmuu");
    }
}
class Tietokone extends Eletroniikka {
    kaynnista() {
        console.log("Tietokone käynnistyy virta nappia painamalla.");
    }
    sammuta() {
        console.log("Tietokone sammuuu virta nappia painamalla.");
    }
}
class Puhelin extends Eletroniikka {
    kaynnista() {
        console.log("Puhelin käynnistyy. Odota hetki")
    }
    sammuta() {
        console.log("Puhelin sammuuu. Odota tovi")
    }
}
class Henkilo1 {
    constructor(nimi, ika) {
        this.nimi = nimi;
        this.ika = ika;
    }
    esittely() {
        console.log(`Hei, olen ${this.nimi}, ${this.ika} vuotta vanha.`);
    }
}
class Tyontekija extends Henkilo1 {
    constructor(nimi, ika, tyonumero) {
        super(nimi, ika);
        this.tyonumero = tyonumero;
    }
    esittely() {
        super.esittely();
        console.log(`Työnumeroni on ${this.tyonumero}.`);
    }
}
const tyontekija = new Tyontekija("Sami", 32, "42000")
tyontekija.esittely();