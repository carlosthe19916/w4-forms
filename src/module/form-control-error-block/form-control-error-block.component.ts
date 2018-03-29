import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ControlContainer, AbstractControl } from '@angular/forms';

@Component({
  selector: 'w4-form-control-error-help-block',
  templateUrl: './form-control-error-block.component.html',
  styleUrls: []
})
export class FormControlErrorHelpBlockComponent implements OnInit {

  @Input()
  public formControlName: string;

  public control: AbstractControl;

  constructor(private parent: ControlContainer) { }

  public ngOnInit() {
    this.control = this.parent.control.get(this.formControlName);
  }

}
