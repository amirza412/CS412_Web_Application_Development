import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./Posts/post-list/post-list.component";
import {CreatePostComponent} from "./Posts/create-post/create-post.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from "./auth/login/login.component";
import {authGuard} from "./auth/auth.guard";
import {CatFactComponent} from "./cat-fact/cat-fact.component";


const routes: Routes = [
  {path: '', component: PostListComponent},
  {path: 'create', component: CreatePostComponent, canActivate: [authGuard]},
  {path: 'edit/:postId', component: CreatePostComponent, canActivate: [authGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'catfact', component: CatFactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
