import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<ng-content></ng-content>'
})
export class ChildComponent {
  @ContentChild('projectedContent') projectedContent: ElementRef;

  ngAfterContentInit() {
    console.log(this.projectedContent.nativeElement.textContent);
  }
}
