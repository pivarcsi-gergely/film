class Film {
    nev;
    rendezo;
    kiadasi_ev;
    constructor(nev, rendezo, kiadasi_ev){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiadasi_ev = kiadasi_ev;
    }
    toString(){
        return this.nev + ", " + this.rendezo + ", " + this.kiadasi_ev + ".";
    }
}

var filmLista = [];


function hozzaad(){
    let bekertFilmNev = document.getElementById("filmNev").value;
    let bekertFilmRendezo = document.getElementById("filmRendezo").value;
    let bekertFilmEv = document.getElementById("filmEv").value;

    let f = new Film(bekertFilmNev, bekertFilmRendezo, bekertFilmEv);
    filmLista.push(f);

    document.getElementById("filmNev").value = "";
    document.getElementById("filmRendezo").value = "";
    document.getElementById("filmEv").value = 0;
}


