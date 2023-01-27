import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'submit-dialog',
  templateUrl: './submit-dialog.component.html',
})
export class SubmitDialogComponent {
  // @Input() score: number;
  // @Input() name: string;
  // @Input() timer: number;
  // @Input() cardClicks: number;
  // @Input() gameNumber: number;
  // email: string;
  // modalRef: NgbModalRef;

  // constructor(private modalService: NgbModal, private emailService: EmailService) {}

  // open() {
  //   this.modalRef = this.modalService.open(SubmitDialogComponent);
  // }

  // submitForm() {
  //   // Send email using emailService with the additional data
  //   this.emailService.sendEmail(this.email, this.score, this.name, this.timer, this.cardClicks, this.gameNumber)
  //     .subscribe(() => {
  //       // Show success message
  //       this.modalRef.close();
  //     }, error => {
  //       // Show error message
  //       console.error(error);
  //     });
  // }
}