import { Component, OnInit } from '@angular/core';
import { AddPageComponent } from '../modals/add-page/add-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages: Array<string>
  constructor(private modal: NgbModal) {
    this.pages = ['publications', 'commissions', 'events', 'about', 'contact'];

   }

  ngOnInit(): void {
  }

  addPageModal() {
    const modalRef = this.modal.open(AddPageComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.result.then((result) => {
      console.log('result:', result)
    })
  }

}
