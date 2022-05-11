import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {FormControl} from '@angular/forms';

// tslint:disable-next-line:variable-name
let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


// let _id = 1;

export class TodoComponent implements OnInit {

  todos: Todo [] = [];

  content = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    const value = this.content.value;
    console.log(value);
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      console.log(todo.complete);
      this.todos.push(todo);
      this.content.reset();
    }
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
    console.log(i);
  }
}
