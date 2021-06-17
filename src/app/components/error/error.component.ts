import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
    @Input() control: AbstractControl;
    @Input() needValidate$: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {
  }

}
