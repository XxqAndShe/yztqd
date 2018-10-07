import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GrowlModule} from "primeng/components/growl/growl";

import {AppConfig} from "app/app.config";

import {SecurityComponent} from "./security.component";
import {SecurityRoutingModule} from "./security-routing.module";

import {SecurityLoginComponent} from "app/security/page/login/security-login.component";
import { API } from "../shared/lib/api/api";
import { AuthService } from "../shared/services/auth-service/auth.service";



@NgModule({
    imports: [
        SecurityRoutingModule,
        HttpModule,
        CommonModule,
        FormsModule,
        GrowlModule
    ],
    declarations: [
        SecurityComponent,
        SecurityLoginComponent
    ],
    providers: [
        API,
        AppConfig,
        AuthService
    ],
})
export class SecurityModule {
}
