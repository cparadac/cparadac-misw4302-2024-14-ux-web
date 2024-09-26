import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  modalRef?: BsModalRef;

  @Input() title: string = '';
  @Input() warningMessage: string = '';
  @Output() acceptEvent = new EventEmitter<number>();

  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  accept(): void {
    this.acceptEvent.emit();
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }
}