import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Inscripcion, Materia, User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

    public dbpath: string = "/materias";
    protected menssagesRef: AngularFirestoreCollection<Materia>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }
  
    public getAll(): AngularFirestoreCollection<Materia> {
        return this.menssagesRef;
    }
  
    public create2(repartidor: Materia) {
        return this.menssagesRef.add({...repartidor});
    }

    public createInscripcion(materia: Materia, inscripcion: Inscripcion) {
        let cupoNuevo = (+materia.cupo) -1;
        this.menssagesRef.doc(materia.uid).update({"cupo": cupoNuevo.toString() })
        return this.menssagesRef.doc(materia.uid).collection("inscripciones").add(inscripcion);
    }
    
    public delete(repartidor: Materia) {
        repartidor.deleted = true;
        return this.menssagesRef.doc(repartidor.uid.toString()).update(repartidor);
    }
}
