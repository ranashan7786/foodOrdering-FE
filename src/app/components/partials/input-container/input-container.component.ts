// import { Component,Input,OnChanges,OnInit, SimpleChanges } from '@angular/core';
// import { AbstractControl } from '@angular/forms';


// const  VALIDATION_MESSAGES:any ={
//   required:'Should not be empty',
//   email : 'Email is not valid'
// }
// @Component({
//   selector: 'input-container',
//   templateUrl: './input-container.component.html',
//   styleUrls: ['./input-container.component.css']
// })
// export class InputContainerComponent implements OnInit,OnChanges{
//   @Input()
//   control!:AbstractControl;
//   @Input()
//   showErrorsWhen:boolean = true;
//   errorMessage:string[] =[]
//   constructor (){}
//   ngOnChanges(changes: SimpleChanges): void {
//     this.checkValidation();
//   }

//   ngOnInit(): void {
//     this.control.statusChanges.subscribe(()=>{
//       this.checkValidation();
//     });
//     this.control.valueChanges.subscribe(()=>{
//       this.checkValidation();
//     })
    
//   }
//   checkValidation(){
//     const errors = this.control.errors;
//     if(!errors){
//       this.errorMessage = [];
//       return;

//     }
//     const errorkeys =Object.keys(errors);
//      this.errorMessage = errorkeys.map(key => VALIDATION_MESSAGES[key]);

//   }

// }
