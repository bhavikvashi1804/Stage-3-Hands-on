import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  @Input('childMessage')
  message: string;

  //this message1 will passed from child to parent via  @ViewChild("")
  message1: string = 'I am child. Sending a message to parent';

  ngOnInit(): void {}
}
