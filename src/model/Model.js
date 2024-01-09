import { szenvedoMondatok } from "./angol"
class Model{

    #modatokLista = []
    #cim = ""
    #obj = {}
    #index = 2;

    constructor(){
        this.#modatokLista = szenvedoMondatok
        this.#cim = this.#modatokLista[0]
        this.#obj = this.#modatokLista[this.#index]
    }

    getCim(){
        return this.#cim;
    }

    getMondat(){
        const mondatLista = this.#obj.mondat.split('_')
        return mondatLista;
    }

    getValasztasLista(){
        return this.#obj.valasztas
    }

    getAlap(){
        return this.#obj.alap
    }

    getIndex(){
        return this.#index;
    }

    setIndex(i){
        this.#index = i;
        this.#obj = this.#modatokLista[this.#index]
    }

    getLength(){
        return this.#modatokLista.length - 2 
    }

}export default Model