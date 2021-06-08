import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadding-spinner',
  template: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loadding-spinner.component.css']
})
export class LoaddingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
