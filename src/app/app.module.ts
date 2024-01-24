import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListAppComponent } from './todo-list-app/todo-list-app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TodoListAppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
