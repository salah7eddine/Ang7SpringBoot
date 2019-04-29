import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './../list-todos/list-todos.component';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo(this.id, '', false, new Date());

    if (this.id !== -1) {
      this.todoService.retrieveTodo('salah', this.id).subscribe(data => {
        this.todo = data;
      }, err => {
        console.log(err);
      });
    }
  }

  saveTodo() {
    if (this.id === -1) {
      // Create Todo
      this.todoService.createTodo('salah', this.todo).subscribe(data => {
        console.log(data);
        this.router.navigate(['todos']);
      }, err => {
        console.log(err);
      });
    } else {
      this.todoService.updateTodo('salah', this.id, this.todo).subscribe(data => {
        console.log(data);
        this.router.navigate(['todos']);
      }, err => {
        console.log(err);
      });
    }
  }

}
