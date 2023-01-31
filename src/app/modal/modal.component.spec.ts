import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
  it('Deve abrir a modal', () => {
    spyOn(component.modal, 'nativeElement');
    component.showModal();
    expect(component.showModal).toHaveBeenCalled();

  });
  it('Deve fechar a modal', () => {
    spyOn(component.modal, 'nativeElement');
    component.closeModal();
    expect(component.closeModal).toHaveBeenCalled();

  });
});
