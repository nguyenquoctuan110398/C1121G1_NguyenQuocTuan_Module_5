import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './todo/todo-list/todo-list.component';
import {TodoCreateComponent} from './todo/todo-create/todo-create.component';
import {TodoEditComponent} from './todo/todo-edit/todo-edit.component';
import {TodoDeleteComponent} from './todo/todo-delete/todo-delete.component';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF, CommonModule} from '@angular/common';

const route: Routes = [
  {path: 'todos', component: TodoListComponent},
  {path: 'todos/create', component: TodoCreateComponent},
  {path: 'todos/edit/:id', component: TodoEditComponent},
  {path: 'todos/delete/:id', component: TodoDeleteComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule], providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppRoutingModule {
}
