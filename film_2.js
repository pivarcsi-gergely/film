class Film {
    constructor(nev, rendezo, kiadasi_ev){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasi_ev = kiadasi_ev;
    }
    toString(){
        return this.nev + ", " + this.rendezo + ", " + this.kiadasi_ev + ".";
    }
}

Film = new Film('Jaws', 128);
console.log(Film.toString());
console.log(Film.hosszOra);


function beolvasas() {
    let filmNev = document.getElementById("filmNev").value;
    let filmHosszPerc = document.getElementById("filmHosszPerc").value;
}