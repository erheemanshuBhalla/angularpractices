import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<app-child #childRef></app-child>'
})
export class ViewChildExampleComponent {
  @ViewChild('childRef') childComponent: ChildComponent;

  ngAfterViewInit() {
    this.childComponent.doSomething();
  }
}
