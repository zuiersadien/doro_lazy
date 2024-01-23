import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newTask: string = 'n';
  tasks: any[] = [];
  newCategorie: string = '';
  categories: any[] = [
    {
      description: 'codigo',
      id: 0,
    },
  ];
  idGenerator(array: any[]) {
    let arrIdNumber = array.map((e) => e.id);
    let largestNumber = Math.max(...arrIdNumber);
    if (Number.isFinite(largestNumber)) {
      return ++largestNumber;
    } else {
      return 0;
    }
  }
  addNewTask() {
    this.tasks.push({
      description: this.newTask,
      done: false,
      id: this.idGenerator(this.tasks),
      idcategorie: null,
    });
    this.newTask = '';
    console.log();
  }

  addNewCategorie() {
    this.categories.push({
      description: this.newCategorie,
      id: this.idGenerator(this.categories),
    });
    this.newCategorie = '';
    console.log();
  }
}
