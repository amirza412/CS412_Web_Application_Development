import {Component, OnInit} from '@angular/core';
import {CatFact} from "./catfact.model";
import {Subscription} from "rxjs";
import {CatFactService} from "./catfact.service";

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css']
})
export class CatFactComponent implements OnInit{
  catfact: CatFact = { "fact": ''};
  private catfactSub: Subscription;

  constructor(private catService: CatFactService) {
    this.catfactSub = new Subscription();
  }

  ngOnInit() {
    this.catService.getCatFact()
    this.catfactSub = this.catService.getUpdatedCatFact().subscribe((catfact: CatFact) => {
      this.catfact = catfact;
      console.log(this.catfact);
    })
  }
}
