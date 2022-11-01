import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPorfolioComponent } from './mi-porfolio.component';

describe('MiPorfolioComponent', () => {
  let component: MiPorfolioComponent;
  let fixture: ComponentFixture<MiPorfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiPorfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiPorfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
