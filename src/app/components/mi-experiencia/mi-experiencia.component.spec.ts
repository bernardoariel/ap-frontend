import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiExperienciaComponent } from './mi-experiencia.component';

describe('MiExperienciaComponent', () => {
  let component: MiExperienciaComponent;
  let fixture: ComponentFixture<MiExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiExperienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
