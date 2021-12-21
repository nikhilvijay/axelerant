import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Output() closeMessage = new EventEmitter();
  mousePosition: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  updatePosition(bool: boolean): void {
    this.mousePosition = bool;
  }

  close() {
    if (!this.mousePosition) this.closeMessage.emit();
  }
}
