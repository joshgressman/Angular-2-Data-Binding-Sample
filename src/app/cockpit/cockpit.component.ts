import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //event is outputed to be used in other components
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //In this example the output listens to an event in the app.html with a method and data from the
  // app.comp.ts that sends data to this onAddServer() method then displays to DOM from server-element

  //newServerName = '';
  // newServerContent = '';
  //**USING LOCAL REFERENCES FROM THE HTML
  @ViewChild('serverContentInput') serverContentInput; //Created access to a local element in the HTML #serverContentInput
  //can now use the element from the HTML form #serverContentInput. Need to import ViewChild and ElementRef
  //Get direct access within the DOM elements

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) { //this is getting data from the @Output serverCreated that cab be used accross components
     this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

}
