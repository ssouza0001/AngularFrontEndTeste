import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaCorrenteComponent } from './conta-corrente.component';

describe('ContaCorrenteComponent', () => {
  let component: ContaCorrenteComponent;
  let fixture: ComponentFixture<ContaCorrenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaCorrenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaCorrenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
