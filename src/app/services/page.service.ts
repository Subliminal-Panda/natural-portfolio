import { Page } from './../models/page.model';
import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private db: Firestore) { }

  addpage(page: Page) {
    const pageRef = collection(this.db, 'pages');
    return addDoc(pageRef, page)
  }

  getpageByID(id: string) {
    const pageRef = doc(this.db, `pages/${id}`);
    return docData(pageRef, { idField: 'id' }) as Observable<Page>;
  }

  getpages(): Observable<Page[]> {
    const pagesRef = collection(this.db, 'pages');
    return collectionData(pagesRef, { idField: 'id'}) as Observable<Page[]>;
  }

  updatepage(page: Page) {
    const pageDocRef = doc(this.db, `pages/${page.id}`);
    return setDoc(pageDocRef, page);
  }

  deletepage(page: Page) {
    const pageDocRef = doc(this.db, `pages/${page.id}`);
    return deleteDoc(pageDocRef);
  }
}
