import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  title: string

  constructor(

    public activeModal: NgbActiveModal
  ) {
    this.title = ''
   }

  ngOnInit(): void {
    this.title = ''
  }

  onSubmit(form: NgForm) {
    console.log('form data:', form.form.value.title)
    this.activeModal.close();
    return form.form.value.title;
  }

}
