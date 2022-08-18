import axios from "axios";
const API = "https://api.datos.gob.mx/v2/sinaica";

export default class Data {
    constructor(){
        this.name = "Muchos datos"
    }

    getAllData(){
        console.log("Hola Mundo");
    }
}