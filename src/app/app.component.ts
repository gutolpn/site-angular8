import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
//import { get } from 'scriptjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css', './app.component.css']
})

export class AppComponent {
  title: string = 'todo';
  model: Model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items; //.filter(item => !item.done);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }


  ngOnInit() {
    /*get('vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow', function() {
    });
    */
  }

}
