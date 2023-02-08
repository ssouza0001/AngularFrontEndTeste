import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import * as jQuery from 'jquery';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let spyModalShow: jasmine.Spy;
  let spyModalHide: jasmine.Spy;

  beforeEach(async(() => {
    spyModalShow = spyOn(jQuery.fn, 'show').and.callThrough();
    spyModalHide = spyOn(jQuery.fn, 'hide').and.callThrough();
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deveria mostrar a modal quando chamada', () => {
    component.showModal();
    expect(spyModalShow).toHaveBeenCalledWith('show');
  });

  it('Deveria fechar a modal quando fechada', () => {
    component.closeModal();
    expect(spyModalHide).toHaveBeenCalledWith('hide');
  });
});
