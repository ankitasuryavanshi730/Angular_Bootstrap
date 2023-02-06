import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

catageries = ["fruits","flowers","color"]

cater = "fruits"

fru = "mango"

fruits = ["mango","banana","apple"]

clicked(){
  if (this.cater == "fruits") {

    this.fruits = ["mango","banana","apple"];
    this.fru = "mango"

  }
  if (this.cater == "flowers") {

    this.fruits = ["rose","sunflower","jerbera"];
    this.fru = "rose"

  }
  if (this.cater == "color") {

    this.fruits = ["red","pink","white"];
    this.fru = "red"

  }
}

}
