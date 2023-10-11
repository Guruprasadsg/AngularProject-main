import { Component } from '@angular/core';
import { HEROES } from '../moc-Heros';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  constructor(private router:Router){}
  heroes=HEROES;
  add(value: any) {
    if (value != '') {
      HEROES.push({ id: 11, name: value });
    }
  }
  delete(val: any) {
    HEROES.forEach((element, index) => {
      if (element.name == val) HEROES.splice(index, 1);
    });
  }
  detailFun(){
    // this.router.navigate(["hero-detail"])
  }
}

