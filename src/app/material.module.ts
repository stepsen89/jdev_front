import { NgModule } from "@angular/core";
import { 
  MatFormFieldModule, 
  MatSelectModule, 
  MatButtonModule,
  MatChipsModule,
  MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule, 
    MatSelectModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule
  ]
})

export class MaterialModule {}