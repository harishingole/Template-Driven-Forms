import { Component, ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm : NgForm;
  defaultQuestion ='pet';
  answere="";
  genders = ['Male','Female'];
  
  //Object to store user enterd value and display after submit
  user =  {
    username:'',
    email:'',
    secret:'',
    answere:'',
    genders:''
  };

  submitted=false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:'johnmalik',
    //     email:'johnmalik@gmail.com'
    //   },
    //   secret:'pet',
    //   quaestionAnswere:'dfds bvb vgrgb',
    //   gender:'Male'
    // })
    this.signupForm.form.patchValue({
      userData:{
        username:'johnmalik',
      }
    })
  }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answere = this.signupForm.value.quaestionAnswere;
    this.user.genders = this.signupForm.value.gender;
    this.signupForm.reset();
  }
  // @ViewChild('f') signupForm : NgForm;
  // subscription='advanced';
  // submitted = false;
  // user =  {
  //     email:'',
  //     password:'',
  //     subscription:''
      
  //   };
  // onSubmit(){
  //   this.submitted = true;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.password = this.signupForm.value.userData.password;
  //   this.user.subscription = this.signupForm.value.subscription;
  //   this.signupForm.reset();
  // }
}
 