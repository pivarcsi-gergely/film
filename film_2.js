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

