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

let filmLista = [];

function hozzaad(){
    let bekertFilmNev = document.getElementById("filmNev").value;
    let bekertFilmRendezo = document.getElementById("filmRendezo").value;
    let bekertFilmEv = document.getElementById("filmEv").value;
}