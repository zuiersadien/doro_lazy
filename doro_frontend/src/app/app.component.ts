import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './componentes/btn/btn.component';
import { InputComponent } from './componentes/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BtnComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newTask: string = 'n';
  tasks: any[] = [
    {
      description: 'prueba',
      done: false,
      idcategoria: null,
      id: 0,
    },
  ];
  newCategorie: string = 'asdas';
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
    console.log(this.newCategorie);
  }
}
