import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

//import('./chart.js').then( m => console.log('teste'));

//import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
/*import {vtkActor} from 'vtk.js/Sources/Rendering/Core/Actor';
import {vtkMapper} from 'vtk.js/Sources/Rendering/Core/Mapper';
import {vtkConeSource} from 'vtk.js/Sources/Filters/Sources/ConeSource';
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css', './app.component.css']
})

export class AppComponent {
  title: string = 'todo';
  model: Model = new Model();


 //fullScreenRenderer = vtkFullScreenRenderWindow.newInstance();
  /*fullScreenRenderer = new vtkFullScreenRenderWindow();
  actor = new vtkActor();
  mapper = new vtkMapper();
  cone = new vtkConeSource();
  */

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

}
