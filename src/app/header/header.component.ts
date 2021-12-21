import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visibleMenu:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  showMenu():void{
    eval("document.querySelector('body').style.overflow = '"+(!this.visibleMenu ?  'hidden' : 'scroll')+"'");
    this.visibleMenu = !this.visibleMenu;
  }

}
