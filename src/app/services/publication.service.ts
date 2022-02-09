import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';

import { Publication } from '../models/publication.model';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
//   private dbPath = '/publications';
//   publicationsRef: AngularFirestoreCollection<Publication>;
//   constructor(private db: AngularFirestore) {
//     this.publicationsRef = db.collection(this.dbPath);
//   }
//   getAll(): AngularFirestoreCollection<Publication> {
//     return this.publicationsRef;
//   }
//   create(publication: Publication): any {
//     return this.publicationsRef.add({...publication})
//   }
//   update(id: string, data: any): Promise<void> {
//     return this.publicationsRef.doc(id).update(data);
//   }
//   delete(id: string): Promise<void> {
//     return this.publicationsRef.doc(id).delete();
//   }
}
