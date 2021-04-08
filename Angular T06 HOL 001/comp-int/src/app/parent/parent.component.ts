import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: ` <app-child [childMessage]="parentMessage"></app-child> `,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  //way 1: Sharing Data via Input
  //new property the we want to pass it from parent to child
  parentMessage = 'message from parent';
  constructor() {}

  ngOnInit(): void {}
}
