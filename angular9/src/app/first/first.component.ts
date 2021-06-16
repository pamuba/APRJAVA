import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `{{name}}<br>
            {{name.toUpperCase()}}<br>
            {{hello()}}<br>
            {{siteUrl}}<br>
            <br>
            <input [id]="txt" type="text" value="Angular9"/>
            <input [disabled]="false" id="{{txt}}" type="text" value="Angular9"/>
            `,
  styles:[]
})
export class FirstComponent implements OnInit {

  public txt = "myId";
  public siteUrl = window.location.href;
  constructor() { }

  public name = "John Smith"

  ngOnInit(): void {
  }

  hello(){
    return "HELLO WORLD"
  }

}
