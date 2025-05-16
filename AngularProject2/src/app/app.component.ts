import { Component } from '@angular/core';
import { SelectorsComponent } from './selectors/selectors.component';
import { CommentsComponent } from './commments/commments.component';
//import { AttributeselectorsComponent } from './attributeselectors/attributeselectors.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'AngularProject2';
}
