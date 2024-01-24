import { Component } from '@angular/core';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list-app',
  templateUrl: './todo-list-app.component.html',
  styleUrls: ['./todo-list-app.component.scss'],
})
export class TodoListAppComponent {
  todos: Todo[] = [];
  newTodo: string = '';
  editingTodo: Todo | null = null;
  isEditMode: boolean = false;

  addNewTodo = () => {
    if (this.newTodo.trim() !== '') {
      if (this.isEditMode && this.editingTodo) {
        this.editingTodo.task = this.newTodo.trim();
        this.isEditMode = false;
        this.editingTodo = null;
      } else {
        const newTodo: Todo = {
          id: this.todos.length + 1,
          task: this.newTodo.trim(),
          completed: false,
        };
        this.todos.push(newTodo);
      }

      this.newTodo = '';
    }
  };

  editTodo(todo: Todo) {
    this.newTodo = todo.task;
    this.isEditMode = true;
    this.editingTodo = todo;
  }

  cancelEdit() {
    this.newTodo = '';
    this.isEditMode = false;
    this.editingTodo = null;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
