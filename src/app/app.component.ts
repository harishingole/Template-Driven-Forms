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
  genders=['Male','Female'];
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
    console.log(this.signupForm);
  }
}
