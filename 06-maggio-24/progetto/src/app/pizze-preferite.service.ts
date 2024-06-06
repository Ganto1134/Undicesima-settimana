import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizzePreferite } from './Models/i-pizze-preferite';

@Injectable({
  providedIn: 'root'
})
export class PizzePreferiteService {

  apiUrl:string = 'http://localhost:3000/pizze-preferite';

  constructor(
    private http:HttpClient
  ) { }

  getPizzas(){
    return this.http.get<iPizzePreferite[]>(this.apiUrl);
  }

  getbyId(id: number){
    return this.http.get<iPizzePreferite[]>(`${this.apiUrl}/${id}`)
  }

  createPizza(newPizza:Partial<iPizzePreferite>){
    return this.http.post<iPizzePreferite>(this.apiUrl, newPizza)
  }

  getFavouritesByUserId(userId:number){
    return this.http.get<iPizzePreferite[]>(`${this.apiUrl}?userId=${userId}`)
  }

  deletePizza(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
