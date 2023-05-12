import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  isInputEnabled: boolean = false;
  isInputEnabled1: boolean = false;
  isInputEnabled2: boolean = false;
  Name!:string;
  Age!:number;
  Sex:string = 'male';
  Colors!:string;
  Foods!:string;
  Line:string = '-';
  Facebook:string = '-';
  IG:string = '-';
  

  onClick(){
    console.log('Name:',this.Name);
    console.log('Age:',this.Age);
    console.log('Sex:',this.Sex);
    console.log('Color:',this.Colors);
    console.log('Food:',this.Foods);
    console.log('Check_Line:',this.isInputEnabled);
    console.log('Line:',this.Line);
    console.log('Check_Line:',this.isInputEnabled1);
    console.log('Facebook:',this.Facebook);
    console.log('Check_Line:',this.isInputEnabled2);
    console.log('Instagram:',this.IG);
  }

  navigateToHome2(){
    this.router.navigate(['/home2']);
  }

  

}
