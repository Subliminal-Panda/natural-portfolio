import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, ElementRef, OnInit, ViewChild, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { EditItemComponent } from '../modals/edit-item/edit-item.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()

  item: Item = { id: undefined, category: '', title: '', description: '', image: '', link: '', order: undefined, published: false, icon: '', linkname: '' }
  page: string | null
  constructor(
    private service: ItemService,
    private route: ActivatedRoute,
    private modal: NgbModal) {
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

  editModal() {
    const modalRef = this.modal.open(EditItemComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });

    console.log('modal ref ID:', modalRef.componentInstance.id)

    modalRef.componentInstance.id = this.item.id;
    modalRef.result.then((result) => {
      console.log("result:", result);
    })

  }

  deleteItem(item: Item) {
    if (confirm('Are you sure you would like to delete this list item?') == true) {
      this.service.deleteitem(item).then(() => {
        console.log('delete successful')
      });
    }
  }
}
