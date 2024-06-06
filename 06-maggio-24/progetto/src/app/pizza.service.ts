import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iPizza } from './Models/i-pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  apiUrl:string = 'http://localhost:3000/pizze';

  constructor(
    private http:HttpClient
  ) { }

  getPizzas(){
    return this.http.get<iPizza[]>(this.apiUrl);
  }

  getbyId(id: number){
    return this.http.get<iPizza[]>(`${this.apiUrl}/${id}`)
  }

  createPizza(newPizza:Partial<iPizza>){
    return this.http.post<iPizza>(this.apiUrl, newPizza)
  }

  updatePizza(pizza:iPizza){
    return this.http.put(`${this.apiUrl}/${pizza.id}`, pizza)
  }

  deletePizza(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
