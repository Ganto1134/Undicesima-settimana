import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  form!:FormGroup;
  obj!:any;
  arr!:any[]

  constructor(private fb:FormBuilder){}

  ngOnInit(){

    this.form = this.fb.group({

      name: this.fb.control(null,[Validators.required]),
          cognome: this.fb.control(null, [Validators.required]),
          password: this.fb.control(null, [Validators.required]),
          genere: this.fb.control(null),
          foto: this.fb.control(null),
          biografia: this.fb.control(null, [Validators.required, Validators.minLength(20)]),
          username: this.fb.control(null)
    })
  }

  invia(){
    console.log(this.form.value);
  }

  isValid(value:string){
    return this.form.get(value)?.invalid
  }

}
