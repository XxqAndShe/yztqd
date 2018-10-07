import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SecurityComponent} from "./security.component";
import {SecurityLoginComponent} from "app/security/page/login/security-login.component";

let routes:Routes=[
    {
        path:'',
        component:SecurityComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: SecurityLoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ],
    providers: [
    ],
})
export class SecurityRoutingModule{

}
