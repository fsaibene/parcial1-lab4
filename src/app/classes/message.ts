export class Message {
    public text: string = "";
    public user: string = "";
    public date: string = "";
}

export class UserLogged {
    public userLogged: string = "";
    public date: number = Date.now();
}

export class Score{
    public user: string;
    public game: string;
    public date: string;
    public score : {};
}

export class Survey {
    public nombre: string;
    public apellido: string;
    public telefono: number;
    public edad: number;
    public recomienda: string;
    public puntaje: number;
    public comentarios: string;
}
