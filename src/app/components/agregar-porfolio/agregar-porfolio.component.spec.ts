import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPorfolioComponent } from './agregar-porfolio.component';

describe('AgregarPorfolioComponent', () => {
  let component: AgregarPorfolioComponent;
  let fixture: ComponentFixture<AgregarPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPorfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
