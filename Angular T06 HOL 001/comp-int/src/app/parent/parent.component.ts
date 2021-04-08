import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit,AfterViewInit {
  //way 1: Sharing Data via Input
  //new property the we want to pass it from parent to child
  parentMessage = 'message from parent';
  message: string;
  constructor() {}

  //Way 2: Child to Parent: Sharing Data via ViewChild
  @ViewChild("myChild")
  child: ChildComponent;

  

  ngOnInit(): void {}

  ngAfterViewInit(){
    this.message = this.child.message1; 
  }
}
