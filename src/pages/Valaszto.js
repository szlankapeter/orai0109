import React from 'react';
import Model from "../model/Model";
import ValasztoView from "../view/valasztoView.js";

const m = new Model();
let mondatLista = m.getMondat();

function next() {
    m.setIndex(m.getIndex() + 1);
    console.log(m.getIndex());
}

export default function Valaszto() {
    return [
        <div>
            <p class='cim'>{m.getCim()}</p>
            <span>{mondatLista[0]}</span>
            <ValasztoView lista={m.getValasztasLista()} />
            <span>{mondatLista[1]}</span>
            <span>  ({m.getAlap()})</span>
            <br />
            <button onClick={next}>Next</button>
        </div>
    ]
}