import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import { UserLogged } from '../classes/message';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  public loggedUser: BehaviorSubject<string> = new BehaviorSubject<string>("");
  public loggedUserIsAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public localStorageUser : string = "";
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
      this.loggedUser.subscribe(value => {
            this.loggedUserIsAdmin.next(value == "admin@admin.com");
      })
    
    this.afAuth.authState.subscribe(user => {
        if (user) {
            this.userData = user;
            localStorage.setItem('user', JSON.stringify(this.userData));
        } else {
            localStorage.setItem('user', "");
        }
        let storagedUser = localStorage.getItem('user');    
        console.log(storagedUser);
    })
  }

  // Sign in with email/password
    public async login(email: string, password: string): Promise<void> {
        try {
            await this.afAuth.signInWithEmailAndPassword(email, password).then(result => {
                if(result.user?.email){
                    this.ngZone.run(() => {
                        this.setUserData(result.user);
                        localStorage.setItem('user', JSON.stringify(result.user));
                        this.router.navigate(['repartidores/alta']);
                        let user = new UserLogged();
                        user.userLogged = email;
                        user.date = Date.now();
                    });
                }
            });
        } catch (error) {
            window.alert(error.message);
        }
  }

  // Sign up with email/password
  public async signUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      // this.sendVerificationMail();
      this.setUserData(result.user);
      this.router.navigate(['home']);
      this.loggedUser.next(email);
    } catch (error) {
      window.alert(error.message);
    }
  }

  // Send email verfificaiton when new user sign up
  public async sendVerificationMail() {
    return this.afAuth.currentUser.then(u => {
      if(u) {
        u.sendEmailVerification()
      }
    })
    .then(() => {
      this.router.navigate(['verify-email']);
    })
  }

  // Reset Forggot password
  public async forgotPassword(passwordResetEmail: any) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    let usr = localStorage.getItem('user');
    if(usr) {
      let userObj = JSON.parse(usr);
      this.loggedUser.next(userObj.email);
      return userObj && userObj.email;
    }
    return false;
  }

  // Auth logic to run auth providers
  public async authLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['home']);
        })
      this.setUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  public setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    this.loggedUser.next(user.email);
    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  public async signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
      this.userData = null;
      this.loggedUser.next("");
    })
  }
}