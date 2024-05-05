import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { DashboardRoutingModule } from './main/components/dashboard/dashboard-routing.module';
import { LabReportsRoutingModule } from './main/components/lab-reports/lab-reports-routing.module';
import { MedicalHistoryRoutingModule } from './main/components/medical-history/medical-history-routing.module';
import { MedicationPlanRoutingModule } from './main/components/medication-plan/medication-plan-routing.module';
import { NutritionalDiaryRoutingModule } from './main/components/nutritional-diary/nutritional-diary-routing.module';
import { NotfoundModule } from './main/components/notfound/notfound.module';
import { NotfoundRoutingModule } from './main/components/notfound/notfound-routing.module';
import { LandingRoutingModule } from './main/components/landing/landing-routing.module';
import { HelpRoutingModule } from './main/components/help/help-routing.module';
import { LandingModule } from './main/components/landing/landing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        DashboardRoutingModule,
        LabReportsRoutingModule,
        MedicalHistoryRoutingModule,
        MedicationPlanRoutingModule,
        NutritionalDiaryRoutingModule,
        NotfoundModule,
        NotfoundRoutingModule,
        LandingRoutingModule,
        HelpRoutingModule,
        LandingModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
