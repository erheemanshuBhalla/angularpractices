import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { AttributeselectorsComponent } from './attributeselectors/attributeselectors.component';
import { CommentsComponent } from './commments/commments.component';
import { ExampleViewQueriesComponent } from './example-view-queries/example-view-queries.component';
import { ChildExampleViewQueriesComponent } from './child-example-view-queries/child-example-view-queries.component';
import { NgtemplateExComponent } from './ngtemplate-ex/ngtemplate-ex.component';
import { NgtemplateEx2Component } from './ngtemplate-ex2/ngtemplate-ex2.component';
import { NgtemplateEx3Component } from './ngtemplate-ex3/ngtemplate-ex3.component';
import { NgtemplateEx4Component } from './ngtemplate-ex4/ngtemplate-ex4.component';
import { ViewChildExampleComponent } from './view-child-example/view-child-example.component';
import { ContentChildExampleComponent } from './content-child-example/content-child-example.component';
import { ParentComponentContentComponent } from './content-child-example/parent-component-content/parent-component-content.component';
import { ChildComponentContentComponent } from './content-child-example/child-component-content/child-component-content.component';
import { ParentEx2Component } from './ngtemplate-ex2/parent-ex2/parent-ex2.component';
import { ChildEx2Component } from './ngtemplate-ex2/child-ex2/child-ex2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleViewQueriesComponent,
    ChildExampleViewQueriesComponent,
    NgtemplateExComponent,
    NgtemplateEx2Component,
    NgtemplateEx3Component,
    NgtemplateEx4Component,
    ViewChildExampleComponent,
    ContentChildExampleComponent,
    ParentComponentContentComponent,
    ChildComponentContentComponent,
    ParentEx2Component,
    ChildEx2Component
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectorsComponent,
    AttributeselectorsComponent,
    CommentsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
