import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaDeTareas: Tarea[] = []
  nombreDeTarea =''

  agregarTarea(){
    const tarea: Tarea={
      nombre: this.nombreDeTarea,
      estado: false
    }
    this.listaDeTareas.push(tarea)
    this.nombreDeTarea=''

  }

  constructor() { }

  ngOnInit(): void {
  }

}
