import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopHeaherComponent} from './top-heaher/top-heaher.component';
import {SideNavBarComponent} from './side-nav-bar/side-nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    TopHeaherComponent,
    SideNavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopHeaherComponent,
    SideNavBarComponent,
    FooterComponent
  ]
})

export class CommonModules {

}
