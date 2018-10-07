import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "app/app.component";

let appRoutes: Routes = [

    {
        path: '',
        component: AppComponent,
        children: [

            {
                path: 'modules',
                loadChildren: 'app/modules/ips.module#IPSModule'
            },
            {
                path: 'security',
                loadChildren: 'app/security/security.module#SecurityModule',
            },
            {
                path: '**',
                redirectTo: 'modules',
                pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})

export class AppRoutingModule {
}
