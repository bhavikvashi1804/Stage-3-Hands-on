import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: ` Say {{ message }} `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input("childMessage") 
  message: string;

  ngOnInit(): void {}
}
