import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { BodyComponent } from './body/body.component';
import { createComponent } from '@angular/compiler/src/core';


const routes: Routes = [
  { path: 'create',component: CreateComponent },

  {path: 'edit/:id',component: EditComponent},

{ path: 'index',component: IndexComponent},


{ 
  path: '', 
  component: BodyComponent,
  children: [
    { path: 'create', component: CreateComponent, pathMatch: 'full'},
    { path: 'index', component: IndexComponent },
    {path:'edit/:id', component: EditComponent}
  ]
},
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []


})
export class AppRoutingModule { }