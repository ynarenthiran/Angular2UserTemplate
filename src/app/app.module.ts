import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';




import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkSpaceComponent } from './WorkSpace/workspace.component';
import { UserComponent } from './WorkSpace/Content/user/content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    WorkSpaceComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
