import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor(private proyectoService: ProyectoService) {
    this.proyectoService.getProyectos().subscribe((res: Proyecto[]) => {
      console.log(res);
      this.proyectos.push(...res);
    });
   }

  ngOnInit() {
  }

}
