import { AddItemComponent } from './../modals/add-item/add-item.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { ItemService } from 'src/app/services/item.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  page: string | null;
  items: Item[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ItemService,
    private modal: NgbModal) {
    this.page = this.route.snapshot.paramMap.get('page')
   }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.page = this.route.snapshot.paramMap.get('page')
      this.service.getitemsByCategory(this.page).subscribe((res: Item[]) => {
        this.items = res;
      })
    });
  }

  addModal() {
    this.modal.open(AddItemComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
  }



}
