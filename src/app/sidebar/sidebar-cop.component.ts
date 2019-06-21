import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar-cop',
    template: `<div class="side-bar">
                   <div class="side-item" [class.selected]="sideItem.isActive" *ngFor="let sideItem of sideTypes" 
                    (click)="selectSide(sideItem)">
                    {{sideItem.name}}</div>
                </div>`,
    styleUrls:  ['./sidebar.css']
})
export class SidebarCopComponent implements OnInit {
    @Input() activeSide = 'ng-cat';
    sideTypes: any[] = [];

    constructor(private router: Router) {
        this.sideTypes = [{name: '鹦鹉', label: 'parrot', isActive: false, url: '/parrot'},
            {name: '旋转照片墙', label: 'photo', isActive: false, url: '/photo'},
            {name: '正方体', label: 'cube', isActive: false, url: '/cube'},
            {name: '时钟', label: 'clock', isActive: false, url: '/clock'}];
    }

    ngOnInit() {
        const activeSidebar = this.sideTypes.find(item => { return item.label === this.activeSide;});
        if (!activeSidebar) {
            this.sideTypes[0].isActive = true;
        } else {
            activeSidebar.isActive = true;
        }
    }

    selectSide(side: any) {
        for (const sideType of this.sideTypes) {
            if (sideType.isActive) {
                sideType.isActive = false;
                break;
            }
        }
        for (const sideType of this.sideTypes) {
            if (sideType.label === side.label) {
                sideType.isActive = true;
                return this.router.navigate([`/cop${sideType.url}`]);
            }
        }
    }
}
