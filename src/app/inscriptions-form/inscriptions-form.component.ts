import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SubjectsApiService} from "../subjects-api-.service";

@Component({
  selector: 'app-inscriptions-form',
  templateUrl: './inscriptions-form.component.html',
  styleUrls: ['./inscriptions-form.component.html']
})
export class InscriptionsFormComponents implements OnInit{
  inspectionList$!:Observable<any[]>;
  inspectionList: any[]=[];
  fechaActual: string;

  constructor(private service:SubjectsApiService) {
    const fecha = new Date();
    this.fechaActual = fecha.toLocaleDateString();
  }


  ngOnInit(): void {
    this.inspectionList$ = this.service.getInspectionList();
    this.inspectionList$.subscribe((inspectionList) => {
      this.inspectionList = inspectionList;
    });
  }
}
