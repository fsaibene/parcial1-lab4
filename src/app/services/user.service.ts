import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public dbpath: string = "/users";
  protected menssagesRef: AngularFirestoreCollection<User>;
  
  constructor(private db: AngularFirestore) {
      this.menssagesRef = db.collection(this.dbpath);
  }

  public getAll(): AngularFirestoreCollection<User> {
      return this.menssagesRef;
  }

  public create2(repartidor: User) {
      return this.menssagesRef.add({...repartidor});
  }
  
  public delete(repartidor: User) {
      repartidor.deleted = true;
      return this.menssagesRef.doc(repartidor.uid.toString()).update(repartidor);
  }
}
