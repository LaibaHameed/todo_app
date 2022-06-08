import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  constructor() { 
    this.todos = [
      {
        sno: 3,
        title: "this is title1",
        desc: "this is description",
        active: true
      },
      {
        sno: 6,
        title: "this is title2",
        desc: "this is description",
        active: true
      },
      {
        sno: 9,
        title: "this is title3",
        desc: "this is description",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}
