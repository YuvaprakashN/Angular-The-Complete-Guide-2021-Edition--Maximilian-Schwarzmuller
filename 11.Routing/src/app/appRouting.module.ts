import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { AuthServiceService } from "./auth-service.service";
import { CanDeactivateGuardService } from "./can-deactivate-guard.service";
import { CustomErrorPageComponent } from "./custom-error-page/custom-error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-Resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoute: Routes = [
  { path: 'servers', component: ServersComponent,
  // canActivate:[AuthGuardService],
  canActivateChild:[AuthGuardService],
  children:[
    { path: ':id', component: ServerComponent,resolve:{server:ServerResolver} },
    { path: ':id/edit', component: EditServerComponent,canDeactivate:[CanDeactivateGuardService] },

  ] },
  { path: 'users', component: UsersComponent,children:[
    { path: ':id/:name', component: UserComponent },

  ] },
  { path: '', component: HomeComponent },
 // {path:'not-found',component:PageNotFoundComponent},
 {path:'not-found',component:CustomErrorPageComponent,data:{message:"not Found"}},
  {path:"**",redirectTo:"/not-found"}
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoute,{useHash:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{

}
