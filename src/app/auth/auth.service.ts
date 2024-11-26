import {Injectable} from '@angular/core';
import {AuthData} from "./auth-data.model";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {

    private isAuthenticated:boolean = false;
    private token: string | null = null;
    private authStatusListener = new Subject<boolean>();
    private tokenTimer: ReturnType<typeof setTimeout> = 0;

    constructor(private http: HttpClient, private router: Router) {
    }

    getToken(){
        return this.token;
    }

    getIsAuth(){
        return this.isAuthenticated;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createUser(email: string, password: string) {
        const authData: AuthData = {
            email: email,
            password: password
        }
        this.http.post('http://localhost:3000/api/user/signup', authData)
            .subscribe(res => {
                console.log(res)
            })
    }

    login(email: string, password: string) {
        const authData: AuthData = {email: email, password: password};
        this.http.post<{ token: string, expiresIn: number}>('http://localhost:3000/api/user/login', authData)
            .subscribe(response => {
                const token = response.token;
                if(token){
                    const expiresInDuration = response.expiresIn;
                    this.setAuthTimer(expiresInDuration)
                    this.isAuthenticated = true;
                    this.token = token;
                    this.authStatusListener.next(true)

                    const now = new Date();
                    this.setAuthDate(token, new Date(now.getTime() + expiresInDuration * 1000))

                    this.router.navigate(['/']);
                }
            });
    }

    logout(){
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthDate()
        this.router.navigate(['/']);
    }

    autoAuthUser() {
        const authInfo = this.getAuthData();
        if(!authInfo){
            return;
        }
        const expiresIn = authInfo.expirationDate.getTime() - new Date().getTime();
        if(expiresIn>0){
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

    private setAuthTimer(expDuration:number){
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, expDuration * 1000);

    }

    private setAuthDate(token:string, expirationDate:Date){
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString())
    }

    private clearAuthDate(){
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }

    private getAuthData(){
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');

        if(!token || !expirationDate){
            return;
        } return{
            token:token,
            expirationDate:new Date(expirationDate)
        }
    }
}

