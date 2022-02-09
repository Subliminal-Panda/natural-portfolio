import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';

import { Commission } from '../models/commission.model';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {
  private dbPath = '/commissions';
  commissionsRef: AngularFirestoreCollection<Commission>;
  constructor(private db: AngularFirestore) {
    this.commissionsRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Commission> {
    return this.commissionsRef;
  }
  create(commission: Commission): any {
    return this.commissionsRef.add({...commission})
  }
  update(id: string, data: any): Promise<void> {
    return this.commissionsRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.commissionsRef.doc(id).delete();
  }
}
