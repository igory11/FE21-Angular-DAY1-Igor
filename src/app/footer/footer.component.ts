import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ffooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logoName: string;

  constructor() {
    this.logoName = 'ViennaTour'
  }

  ngOnInit(): void {
  }

}
