import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroimg1: string;

  heroimg2: string;

  heroimg3: string;

  locat: string;


  constructor() {

    this.heroimg1 = "https://cdn.pixabay.com/photo/2018/08/16/08/39/hallstatt-3609863_960_720.jpg" ;
    this.heroimg2 = "https://cdn.pixabay.com/photo/2016/09/04/20/09/mountains-1645078_960_720.jpg";
    this.heroimg3 = "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_960_720.jpg";
    this.locat = 'Vienna'
  }

  ngOnInit(): void {
  }

}
