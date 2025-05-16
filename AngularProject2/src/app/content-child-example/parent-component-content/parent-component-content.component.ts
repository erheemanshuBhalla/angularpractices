import { Component } from '@angular/core';
@Component({
  selector: 'app-parent',
  template: '<app-child><p #projectedContent>Hello, projected content!</p></app-child>'
})
export class ParentComponent { }
