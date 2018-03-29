import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  HostBinding
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ControlContainer } from '@angular/forms';

@Directive({
  selector: '[w4FormControlHasError]'
})
export class FormControlHasErrorDirective implements OnInit, OnDestroy {

  @Input()
  public w4FormControlHasError: string;

  @Input()
  public errorClass = 'has-error';

  @HostBinding('class')
  public classes: string;

  private subscriptions: Subscription[] = [];

  constructor(private parent: ControlContainer) { }

  public ngOnInit() {
    const control = this.parent.control.get(this.w4FormControlHasError);
    this.subscriptions.push(control.valueChanges.subscribe((value) => {
      if (!(control.valid || control.disabled)) {
        this.classes = this.errorClass;
      } else {
        this.classes = '';
      }
    }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
  }

}
