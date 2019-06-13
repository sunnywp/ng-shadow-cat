import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { DemoModule } from './demo/demo.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PageNorFoundComponent} from './page-not-found.component';
import { ParrotComponent } from './cop/parrot/parrot.component';
import { PhotoWallComponent } from './cop/photo-wall/photo-wall.component';

@NgModule({
  imports: [
    BrowserModule, HttpClientModule, SidebarModule, AppRoutingModule, DemoModule
  ],
  declarations: [
    AppComponent, PageNorFoundComponent, ParrotComponent, PhotoWallComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
