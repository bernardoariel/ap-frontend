import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiEducacionComponent } from './mi-educacion.component';

describe('MiEducacionComponent', () => {
  let component: MiEducacionComponent;
  let fixture: ComponentFixture<MiEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
