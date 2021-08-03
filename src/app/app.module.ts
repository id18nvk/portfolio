import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPrevComponent } from './project-prev/project-prev.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPrevComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path : 'home', component: ProjectPrevComponent},
      { path : '', redirectTo: 'home', pathMatch: 'full'},
      { path : '**', redirectTo: 'home', pathMatch: 'full'}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
