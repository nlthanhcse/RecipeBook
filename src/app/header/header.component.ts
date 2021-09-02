import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onHeaderSelect(headerEle: number) {
    this.headerSelected.emit(headerEle);
  }

}
