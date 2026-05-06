import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    DashboardComponent,
    TasksComponent,
    AddTaskComponent,
    NotFoundComponent,
    HomeComponent,
    FeaturesComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
