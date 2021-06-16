import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  template: `
    <div>
      <input type="text" [(ngModel)]="name" />{{name}}
      <h2 *ngIf="displayName">Hello World</h2>
      <button (click)="toggle()">Toggle</button>


      <h2 *ngIf="displayName;then thenBlock else elseBlock">Angular9 Webinar</h2>

      <ng-template #thenBlock>
       <h2>Then Block</h2>
      </ng-template>

      <ng-template #elseBlock>
        <h2>Else Block</h2>
      </ng-template>

      <hr>
      <div [ngSwitch]="color">
          <div *ngSwitchCase="'red'"  [style.color]="color">U picked red color</div>
          <div *ngSwitchCase="'orange'"  [style.color]="color">U picked orange color</div>
          <div *ngSwitchCase="'blue'" [style.color]="color">U picked blue color</div>
          <div *ngSwitchDefault>Pikc a Color</div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ThirdComponent implements OnInit {


  public color='red'
  public displayName = true;
  public name="";

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
      this.displayName = !this.displayName
  }

}
