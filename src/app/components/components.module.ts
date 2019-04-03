import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { SpinComponent} from './spin/spin.component';

@NgModule({
    imports: [CommonModule],
    declarations : [SpinComponent],
       exports  : [SpinComponent]
})

export class  ComponentsModule { }
