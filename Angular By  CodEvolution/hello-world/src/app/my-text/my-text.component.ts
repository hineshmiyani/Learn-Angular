import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-text', // 1st way to Import Componenet
  // selector: '.app-my-text', // 2nd way to Import Componenet
  // selector: '[app-my-text]', // 3rd way to Import Componenet

  // templateUrl: './my-text.component.html', //External
  template: `<div><h1>Inline Template</h1></div>`, // Internal

  // styleUrls: ['./my-text.component.css'], //External
  styles: [
    `
      div {
        background-color: red;
        height: 60px;
        width: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 30px;
      }

      h1 {
        color: white;
        font-family: helvetica, arial;
      }
    `,
  ], // Internal
})
export class MyTextComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
