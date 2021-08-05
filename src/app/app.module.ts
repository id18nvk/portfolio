import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPrevComponent } from './project-prev/project-prev.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectCardComponent } from './project-prev/project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPrevComponent,
    AboutMeComponent,
    ProjectCardComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path : 'aboutme', component: AboutMeComponent},
      { path : 'projects', component: ProjectPrevComponent},
      { path : 'project/:id', component: ProjectDetailsComponent},
      { path : '', redirectTo: 'aboutme', pathMatch: 'full'},
      { path : '**', redirectTo: 'aboutme', pathMatch: 'full'}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
