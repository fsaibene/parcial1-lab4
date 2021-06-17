export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    deleted: boolean;
    tipo: string;
    firstName: string;
    lastName: string;
 }

 export interface Materia {
    uid: string;
    nombre: string;
    cuatrimestre: string;
    cupo: string;
    anio: string;
    profesor: string;
    deleted: boolean;
 }