export class Repartidor {
    public dni: string;
    public nombre: string;
    public edad: number;
    public capacidadTransporte: number;
    public pais: string;
    public unidadPropia: boolean;
    public deleted: boolean = false;
}

export class Pais {
    public name: string;
    public url;
}