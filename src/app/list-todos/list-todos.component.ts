import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

// Future
// - No Naviation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components
// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];

  message: string;
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(1, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(1, 'Visite India', false, new Date())
  //   // {id : 1, description : 'Learn to Dance'},
  //   // {id : 2, description : 'Become an Expert at Angular'},
  //   // {id : 3, description : 'Visite India'}
  // ];

  // todo = {
  //   id : 1,
  //   description: 'Learn to Dance'
  // };

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('salah').subscribe(response => {
      this.todos = response;
    }, err => {
      console.log(err);
    });
  }

  deleteTodo(id) {
    // console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('salah', id).subscribe(response => {
      this.message = `Delete of Todo ${id} Successful`;
      // this.refreshTodos();
    }, err => {
      console.log(err);
    });
  }

  updateTodo(id) {
    // console.log(`update ${id}`);
    this.router.navigate(['todos', id]);
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

}
