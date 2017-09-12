import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunRoutingModule } from "./fun-routing-modul";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AddFunComponent } from "./add-fun/add-fun.component";
import { FunComponent } from "./fun/fun.component";


@NgModule({
    imports: [
        CommonModule,
        FunRoutingModule,
        FormsModule,
        SharedModule
    ],
    declarations: [
        AddFunComponent,
        FunComponent,
    ],
    exports: [
        // FunComponent
    ],
    providers: [
        FunComponent,
        AddFunComponent
        // Array
    ]

})
export class FunModule { }
