import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPorfolioComponent } from './editar-porfolio.component';

describe('EditarPorfolioComponent', () => {
  let component: EditarPorfolioComponent;
  let fixture: ComponentFixture<EditarPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPorfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
