import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/app/models/item.model';
import { ItemService } from './../../../services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  @Input()
  item: Item = {id: '', category: '', title: '', description: '', image: '', icon: '', link: '', linkname: '', order: undefined, published: false}
  page: string | null

  constructor(
    private service: ItemService,
    private route: ActivatedRoute,
    public activeModal: NgbActiveModal) {
    this.page = this.route.snapshot.paramMap.get('page')
  }

  ngOnInit() {
    if(this.item.id) {
      this.service.getitemByID(this.item.id).subscribe(res => {
        this.item = res;
        console.log('response:', res);
      })
    }
  }

  onSubmit(form: NgForm) {
    this.service.updateitem(this.item).then(() => {
      this.activeModal.close();
      console.log('Data updated successfully');
    })
  }
}
