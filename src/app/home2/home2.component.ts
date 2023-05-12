import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
  standalone:true,
  imports:[IonicModule,FormsModule,CommonModule],
})
export class Home2Component  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  Weight!:number;
  Height!:number;
  Bmi:number = 0;
  BmiLevel!:string;
  public alertButton = ['OK'];

  Calculate(){
    console.log('Weight:',this.Weight);
    console.log('Height:',this.Height);
    this.Bmi = this.Weight/((this.Height/100.00)*(this.Height/100.00))
    console.log('BMI:',this.Bmi);
  }

  BmiCalculate(){
    this.Bmi = this.Weight/((this.Height/100.00)*(this.Height/100.00))
    if(this.Bmi < 18.5){
      this.BmiLevel = 'Underweight'
    }
    else if(this.Bmi >= 18.5 && this.Bmi <= 24.9){
      this.BmiLevel = 'Normal'
    }
    else if(this.Bmi > 24.9 && this.Bmi <= 29.9){
      this.BmiLevel = 'Overweight'
    }
    else if(this.Bmi > 29.9 && this.Bmi <= 34.9){
      this.BmiLevel = 'Obese'
    }
    else if(this.Bmi > 34.9){
      this.BmiLevel = 'Extremely Obese'
    }
    console.log('BMI:',this.Bmi);
    console.log('BmiLevel:',this.BmiLevel);
  }

  navigateToHome1(){
    this.router.navigate(['/home']);
  }

}
