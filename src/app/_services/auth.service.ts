import { Injectable } from '@angular/core';

import { SERVER_URL } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../_interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    // SERVER_URL = 'https://aklogical.com/api';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('roommate')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('roommate')));
        return this.currentUserSubject.value;
    }
    syncLocalDB(userID){
        return this.http.get(`${SERVER_URL}/users/syncUser/${userID}`);
    }
    getToken(): string {
        return localStorage.getItem('roommatetoken');
    }
    login(phonenumber, password) {
        return this.http.post<any>(`${SERVER_URL}/users/authenticate`, { phonenumber, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('roommateAdmin', JSON.stringify(user[0]));
                localStorage.setItem('roommateAdmintoken', user[1].token);
                this.currentUserSubject.next(user);
                return user;
            }));
    }
    loginemail(email, password) {
        return this.http.post<any>(`${SERVER_URL}/users/authenticatebyemail`, { email, password })
            .pipe(map(user => {
                localStorage.setItem('roommateAdmin', JSON.stringify(user[0]));
                localStorage.setItem('roommateAdmintoken', user[1].token);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('roommateAdmin');
        localStorage.removeItem('roommateAdmintoken');
        this.currentUserSubject.next(null);
    }

    getAll() {
        return this.http.get(`${SERVER_URL}/users`);
    }
    register(user) {
        // debugger
        return this.http.post(`${SERVER_URL}/users/register`, user);
    }
    checkphonenumber(phonenumber) {
        return this.http.get(`${SERVER_URL}/users/phonenumber/${phonenumber}`);
    }
    checkemail(email) {
        return this.http.get(`${SERVER_URL}/users/emailcheck/${email}`);
    }
}
