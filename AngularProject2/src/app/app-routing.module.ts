import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgtemplateExComponent } from './ngtemplate-ex/ngtemplate-ex.component';


const routes: Routes = [
  {
  path: 'ngtemplateexample',
  component: NgtemplateExComponent
  
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
