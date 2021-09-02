import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() selectedHeaderEleInMain: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
