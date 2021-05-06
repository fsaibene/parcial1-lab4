import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Repartidor } from '../model/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidoresService {

    public dbpath: string = "/repartidores";
    protected menssagesRef: AngularFirestoreCollection<Repartidor>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Repartidor> {
        return this.menssagesRef;
    }

    public create(repartidor: Repartidor) {
        return this.menssagesRef.doc(repartidor.dni.toString()).set(({...repartidor}));
    }

    public create2(repartidor: Repartidor) {
        return this.menssagesRef.add({...repartidor});
    }
    
    public delete(repartidor: Repartidor) {
        repartidor.deleted = true;
        return this.menssagesRef.doc(repartidor.dni.toString()).update(repartidor);
    }
}
