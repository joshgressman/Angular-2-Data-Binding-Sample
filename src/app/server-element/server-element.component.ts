import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input('srvElement') element: {type: string, name: string, content: string}; //can now be bound with another element outside of the component
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  constructor() {
   console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit Called');
    console.log('text content:', this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){ //changs from @input() element
    console.log('ngOnChanges Called');
    console.log('changes', changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

}
