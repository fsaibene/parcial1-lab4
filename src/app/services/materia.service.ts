import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Materia, User } from '../classes/user';

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
    
    public delete(repartidor: Materia) {
        repartidor.deleted = true;
        return this.menssagesRef.doc(repartidor.uid.toString()).update(repartidor);
    }
}
