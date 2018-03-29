import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

import { FormControlHasErrorDirective } from './form-control-has-error/form-control-has-error.directive';
import { FormControlErrorHelpBlockComponent } from './form-control-error-block/form-control-error-block.component';

// Export module's public API
export { LibComponent } from './component/lib.component';
export { LibService } from './service/lib.service';

export { FormControlHasErrorDirective } from './form-control-has-error/form-control-has-error.directive';
export { FormControlErrorHelpBlockComponent } from './form-control-error-block/form-control-error-block.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LibComponent,
    FormControlHasErrorDirective,
    FormControlErrorHelpBlockComponent
  ],
  declarations: [
    LibComponent,
    FormControlHasErrorDirective,
    FormControlErrorHelpBlockComponent
  ]
})
export class W4FormsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: W4FormsModule,
      providers: [LibService]
    };
  }
}
