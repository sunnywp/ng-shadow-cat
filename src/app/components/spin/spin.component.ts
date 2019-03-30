import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'nc-spin',
    templateUrl: './spin.component.html',
    styleUrls: ['./spin.component.css']
})
export class SpinComponent implements OnInit {
    @Input() type = 'default';  // 'default'| 'clover' | 'horizontal'
    @Input() size = 'large';  // 'large' | 'medium' | 'small'
    spinClass: any = {};
    constructor() {
    }

    ngOnInit() {
        this.spinClass = {
            'large': this.size === 'large',
            'medium': this.size === 'medium',
            'small': this.size === 'small'
        };
    }

}
