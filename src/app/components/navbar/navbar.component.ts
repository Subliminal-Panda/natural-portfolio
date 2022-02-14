import { PageService } from './../../services/page.service';
import { Component, OnInit } from '@angular/core';
import { AddPageComponent } from '../modals/add-page/add-page.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Page } from 'src/app/models/page.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pages: Page[] = [
    {id: 'publications', title: 'publications', order: 0},
    {id: 'commissions', title: 'commissions', order: 1},
    {id: 'events', title: 'events', order: 2},
    {id: 'about', title: 'about', order: 3},
    {id: 'contact', title: 'contact', order: 4}];

  constructor(private modal: NgbModal, private service: PageService) {
    this.pages = [
      {id: 'publications', title: 'publications', order: 0},
      {id: 'commissions', title: 'commissions', order: 1},
      {id: 'events', title: 'events', order: 2},
      {id: 'about', title: 'about', order: 3},
      {id: 'contact', title: 'contact', order: 4}];
   }

  ngOnInit(): void {
    // this.service.getpages().subscribe((res: Page[]) => {
      // this.pages.concat(res)
    // })
  }

  addPageModal() {
    const modalRef = this.modal.open(AddPageComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }

}
