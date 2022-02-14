import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Page } from 'src/app/models/page.model';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  page: Page = { id: undefined, title: '', order: undefined }
  constructor(private service: PageService) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.addpage(form.value).then(() => form.reset());
  }

}
