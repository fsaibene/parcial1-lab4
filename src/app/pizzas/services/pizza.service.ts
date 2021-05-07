import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

    public dbpath: string = "/pizzas";
    protected menssagesRef: AngularFirestoreCollection<Pizza>;
    
    constructor(private db: AngularFirestore) {
        this.menssagesRef = db.collection(this.dbpath);
    }

    public getAll(): AngularFirestoreCollection<Pizza> {
        return this.menssagesRef;
    }

    public create(repartidor: Pizza) {
        return this.menssagesRef.doc(repartidor.nombre.toString()).set(({...repartidor}));
    }

    public create2(repartidor: Pizza) {
        return this.menssagesRef.add({...repartidor});
    }
    
    public delete(repartidor: Pizza) {
        repartidor.deleted = true;
        return this.menssagesRef.doc(repartidor.nombre.toString()).update(repartidor);
    }
}
