import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }

  getProyectos() {
    return this.http.get('assets/data/proyectos.json');
  }

  getHabilidades() {
    return this.http.get('assets/data/habilidades.json');
  }
}
