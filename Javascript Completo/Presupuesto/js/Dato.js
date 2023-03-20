class Dato{
    constructor(descripcion, valor){
        this._descripcion   = descripcion;
        this._valor         = valor
    }
    get Desc(){
        return this._descripcion;
    }
    set Desc(desc){
        this._descripcion = desc;
    }

    get Val(){
        return this._valor;
    }
    set Val(val){
        this._valor = val;
    }
}