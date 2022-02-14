import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc, query, where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private db: Firestore) { }

  additem(item: Item) {
    const itemRef = collection(this.db, 'items');
    return addDoc(itemRef, item)
  }

  getitemByID(id: string) {
    const itemRef = doc(this.db, `items/${id}`);
    return docData(itemRef, { idField: 'id' }) as Observable<Item>;
  }

  getitems(): Observable<Item[]> {
    const itemsRef = collection(this.db, 'items');
    return collectionData(itemsRef, { idField: 'id'}) as Observable<Item[]>;
  }

  getitemsByCategory(category: string | null): Observable<Item[]> {
    const itemsRef = collection(this.db, 'items');
    const q = query(itemsRef, where("category", "==", category))
    return collectionData(q, { idField: 'id'}) as Observable<Item[]>;
  }

  updateitem(item: Item) {
    const itemDocRef = doc(this.db, `items/${item.id}`);
    return setDoc(itemDocRef, item);
  }

  deleteitem(item: Item) {
    const itemDocRef = doc(this.db, `items/${item.id}`);
    return deleteDoc(itemDocRef);
  }
}
