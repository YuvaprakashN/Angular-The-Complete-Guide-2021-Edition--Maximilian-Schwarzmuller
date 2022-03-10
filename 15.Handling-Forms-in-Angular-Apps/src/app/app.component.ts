import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  answer=""
  genders=['male','female']
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   this.signupForm.form.setValue({
  //     userData:{
  //       userName:suggestedName,
  //       email:'yuva@yuva.com'
  //     },
  //     secret:'',
  //     answer:'',
  //     gender:''
  //   })
  // }
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        userName:suggestedName,
      },

    })
  }
  //   onSubmit(form:NgForm){
  // console.log(form);
  //   }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset()
  }
}
