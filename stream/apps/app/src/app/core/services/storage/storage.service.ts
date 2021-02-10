/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class StorageService {
private store = localStorage;

  set(key: string, value: any) {
    const stringValue = JSON.stringify(value);
    this.store.setItem(key, stringValue);
  }

  get(key:string){
      const storedValue =this.store.getItem(key);
      return JSON.parse(storedValue);
  }

  clear(){
      this.store.clear();
  }

  remove(key:string){
      this.store.removeItem(key);
  }
}
