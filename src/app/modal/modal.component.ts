import { Component, ElementRef, ViewChild } from '@angular/core';

declare var jQuery: any;


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @ViewChild('modal',{static: false}) modal:ElementRef;

  showModal() {
    jQuery(this.modal.nativeElement).modal('show');
  }
  closeModal() {
    jQuery(this.modal.nativeElement).modal('hide');

  }
}

