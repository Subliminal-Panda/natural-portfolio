import { ActivatedRoute } from '@angular/router';
import { ItemService } from './../../../services/item.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  item: Item = { id: undefined, category: '', title: '', description: '', image: '', link: '', order: undefined, published: false, icon: '', linkname: '' }
  page: string | null
  constructor(private service: ItemService, private route: ActivatedRoute) {
    this.page = this.route.snapshot.paramMap.get('page')
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.additem(form.value).then(() => form.reset());
    this.route.params.subscribe(() => {
      this.page = this.route.snapshot.paramMap.get('page')
    });
  }

}
