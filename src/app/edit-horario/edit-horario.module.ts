import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHorarioPageRoutingModule } from './edit-horario-routing.module';

import { EditHorarioPage } from './edit-horario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditHorarioPageRoutingModule
  ],
  declarations: [EditHorarioPage]
})
export class EditHorarioPageModule {}
