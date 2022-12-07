import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>} = {defaultOptions: [], accessLink: []}
  
  customOptions: Array<any> = []
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {

      }
    ]

    this.mainMenu.accessLink = [
      {
        
      }
    ]

    this.customOptions = [

    ]
  }

}
