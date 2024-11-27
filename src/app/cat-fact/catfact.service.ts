import {CatFact} from "./catfact.model";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class CatFactService {
    private catfact: CatFact = { "fact": ''}

    private catfactUpdated = new Subject<CatFact>();

    constructor(private http: HttpClient) {
    }

    getCatFact(){
        this.http.get<{ catfact: CatFact }>('https://catfact.ninja/fact').subscribe((payLoad: any) => {
            this.catfact = payLoad;
            this.catfactUpdated.next(this.catfact);
        });
    }

    getUpdatedCatFact(){
        return this.catfactUpdated.asObservable();
    }
}