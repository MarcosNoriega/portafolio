import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Habilidades } from 'src/app/interfaces/Proyecto';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: Habilidades[] = [];

  constructor(private proyectoService: ProyectoService) {
    this.proyectoService.getHabilidades().subscribe((res: Habilidades[]) => {
      this.habilidades.push(...res);
    });
   }

  ngOnInit() {
  }

}
