import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  /**
 * 
 * @param {* Nom de la zone de stockage: exemple ( name )} name 
 * @param {* Valeur initial, si aucune n'est present c'est celle qui sera stocker de base (Array,number,string,object,...): exemple ( Jean-mich )} ini
 * @returns 
 */
  Get(name: any, ini: any) {
    let data = localStorage.getItem(name);
  
    if (data !== null) {
      return JSON.parse(data);
    } else {
      localStorage.setItem(name, JSON.stringify(ini));
      const newData = localStorage.getItem(name); 

      if (newData !== null) {
        return JSON.parse(newData);
      } else {
        return ini;
      }
    }
  }
  
/**
* 
* @param {* Nom de la zone de stockage: exemple ( name )} name 
* @param {* Valeur a stocker (Array,number,string,object,...): exemple ( Jean-mich )} value 
* @returns 
*/
Set(name: any, value: any) {
  localStorage.setItem(name, JSON.stringify(value));

  const data = localStorage.getItem(name);

  if (data !== null) {
    return JSON.parse(data);
  } else {
    return null;
  }
}

}

