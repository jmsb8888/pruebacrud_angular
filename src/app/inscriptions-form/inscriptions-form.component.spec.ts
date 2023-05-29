import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsFormComponents } from './inscriptions-form.component';

import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  
  

describe('InscriptionsFormComponent', () => {
  let component: InscriptionsFormComponents;
  let fixture: ComponentFixture<InscriptionsFormComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionsFormComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsFormComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



  




