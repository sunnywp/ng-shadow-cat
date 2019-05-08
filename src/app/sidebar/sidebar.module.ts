import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarAboutComponent} from './sidebar-about.component';
import {SidebarContorlComponent} from './sidebar-contorl.component';
import {SidebarPatternComponent} from './sidebar-pattern.component';
import {SidebarCopComponent} from './sidebar-cop.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarAboutComponent, SidebarContorlComponent, SidebarPatternComponent, SidebarCopComponent],
  exports:    [ SidebarAboutComponent, SidebarContorlComponent, SidebarPatternComponent, SidebarCopComponent]
})
export class SidebarModule { }
