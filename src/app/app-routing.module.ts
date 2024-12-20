import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageUploadComponent} from "./pages/page-upload/page-upload.component";

const routes: Routes = [

  {
    path: 'page-upload',
    component: PageUploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
