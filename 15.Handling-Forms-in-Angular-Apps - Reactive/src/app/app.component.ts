import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { delay } from 'rxjs-compat/operator/delay';
import { map } from 'rxjs-compat/operator/map';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames: string[] = ['Yuva', 'Arun'];
  forbiddenEmailIds = [
    'test@test.com',
    'yuva@yuva.com',
  ];
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        userName: new FormControl(null, [
          Validators.required,
          this.forbiddenNames(this.forbiddenUsernames),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

     // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }

  /** A hero's name can't match the given regular expression */
  // export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? {forbiddenName: {value: control.value}} : null;
  //   };
  // }
  forbiddenNames(names: string[]): ValidatorFn {
    return (control: AbstractControl): { [s: string]: boolean } | null => {
      if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return { 'nameIsForbidden': true };
      }
      return null;
    };
  }
  checkForbiddenEmail(email:string):Observable<boolean>|null{
    return timer(1000).pipe(
      switchMap(() => {
        // Check if username is available
        return of(this.forbiddenEmailIds.includes(email));
      })
    )
  }

  userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.checkForbiddenEmail(control.value)
        .pipe(
          map((res:boolean) => {
            return res?{ "mobNumExists": true } : null;
          }
          ));
    };
  }


  existingMobileNumberValidator(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return userService.getUserByMobileNumber(control.value).pipe(map(
        (users: User[]) => {
          return (users && users.length > 0) ? { "mobNumExists": true } : null;
        }
      ));
    };
  }


  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
}
