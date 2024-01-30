import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BtnComponent } from './componentes/btn/btn.component';
import { InputComponent } from './componentes/input/input.component';
import { TasksService } from './services/tasks.service';
import { OverlayComponent } from './components/overlay/overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    BtnComponent,
    InputComponent,
    OverlayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.getAllTask();
  }
  getAllTask() {
    this.taskService.getAll().subscribe({
      next: (response) => {
        console.log(response);
      },
    });
  }
  time: any = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };
  timeElapsed: string = `0${this.time.hours}:0${this.time.minutes}:0${this.time.seconds}`;
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
  startNewSesion: boolean = false;

  stopWatch: any;
  startStopWatch() {
    this.stopWatch = setInterval(() => {
      console.log(this.time);
      this.time.seconds++;
      if (this.time.seconds === 60) {
        this.time.seconds = 0;
        this.time.minutes++;
      }

      if (this.time.minutes === 60) {
        this.time.minutes = 0;
        this.time.hours++;
      }
      this.updateDisplay();
    }, 1000);
  }
  updateDisplay() {
    this.timeElapsed = `${this.time.hours < 10 ? '0' : ''}${this.time.hours}:${this.time.minutes < 10 ? '0' : ''}${this.time.minutes}:${this.time.seconds < 10 ? '0' : ''}${this.time.seconds}`;
  }
  idGenerator(array: any[]) {
    let arrIdNumber = array.map((e) => e.id);
    let largestNumber = Math.max(...arrIdNumber);
    if (Number.isFinite(largestNumber)) {
      return ++largestNumber;
    } else {
      return 0;
    }
  }
  stopStopwatch() {
    clearInterval(this.stopWatch);
  }
  changeStartNewSesion(condition: 'stop' | 'start') {
    if (condition == 'stop') {
      this.startNewSesion = false;
      this.stopStopwatch();
    } else if (condition == 'start') {
      this.startNewSesion = true;
      this.startStopWatch();
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
