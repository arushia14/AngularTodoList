export class Todo {
    content: string = '';
    completed: boolean = false;
  
    constructor(todo: {content: string, completed: boolean}) {
      this.content = todo.content;
      this.completed = todo.completed;
    }
  }
  