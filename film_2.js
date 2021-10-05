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
    document.getElementById("filmEv").value = "";
}


function btnListazas(){
    tablaLetrehozas();
}

function tablaLetrehozas(){
    tablaLista.style.display = "";

    tablaLista.innerHTML = "";

    for (let i = 0; i < filmLista.length; i++) {
        let row = tablaListaTest.insertRow();

        let td1 = row.insertCell();
        let text1 = document.createTextNode(filmLista[i].nev);
        td1.appendChild(text1);

        let td2 = row.insertCell();
        let text2 = document.createTextNode(filmLista[i].rendezo);
        td2.appendChild(text2);

        let td3 = row.insertCell();
        let text3 = document.createTextNode(filmLista[i].kiadasi_ev);
        td3.appendChild(text3);
    }
}