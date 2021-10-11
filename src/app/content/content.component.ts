import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  cName: string;
  des: string;
  cImg: string;

  constructor() {
    this.cName = 'New York';
    this.des = 'New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is also the most densely populated major city in the USA.';
    this.cImg = 'https://cdn.pixabay.com/photo/2014/05/03/01/04/city-336708_960_720.jpg'
  }

  ngOnInit(): void {
  }

}
