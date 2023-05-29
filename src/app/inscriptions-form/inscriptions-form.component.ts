import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-inscriptions-form',
  templateUrl: './inscriptions-form.component.html',
  styleUrls: ['./inscriptions-form.component.html']
})
export class InscriptionsFormComponents implements OnInit{
  inspectionList$!:Observable<any[]>;
  inspectionTypesList:any=[];
  fechaActual: string;

  constructor() {
    const fecha = new Date();
    this.fechaActual = fecha.toLocaleDateString();
  }

  ngOnInit(): void {
  }
}
