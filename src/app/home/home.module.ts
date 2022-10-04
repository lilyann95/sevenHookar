import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BrandsComponent } from './brands/brands.component';
import { ExperienceComponent } from './experience/experience.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SpecialityMixesComponent } from './speciality-mixes/speciality-mixes.component';
import { SpecialMixesComponent } from './special-mixes/special-mixes.component';
import { FlavorsComponent } from './flavors/flavors.component';
import { NavbarSectionComponent } from './navbar-section/navbar-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    BrandsComponent,
    ExperienceComponent,
    WhyUsComponent,
    SpecialityComponent,
    AboutUsComponent,
    WelcomeComponent,
    SpecialityMixesComponent,
    SpecialMixesComponent,
    FlavorsComponent,
    NavbarSectionComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatToolbarModule,
  ],
})
export class HomeModule {}
