import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscriptions-form',
  templateUrl: './inscriptions-form.component.html',
  styleUrls: ['./inscriptions-form.component.css']
})

export class MiComponenteComponent {

  fechaActual: string;

  constructor() {
    const fecha = new Date();
    this.fechaActual = fecha.toLocaleTimeString();
  }

}
