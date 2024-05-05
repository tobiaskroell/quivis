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
import { AccessdeniedModule } from './main/components/auth/accessdenied/accessdenied.module';
import { AccessdeniedRoutingModule } from './main/components/auth/accessdenied/accessdenied-routing.module';
import { ErrorRoutingModule } from './main/components/auth/error/error-routing.module';
import { ErrorModule } from './main/components/auth/error/error.module';
import { LoginModule } from './main/components/auth/login/login.module';
import { LoginRoutingModule } from './main/components/auth/login/login-routing.module';

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
        LandingModule,
        AccessdeniedModule,
        AccessdeniedRoutingModule,
        ErrorRoutingModule,
        ErrorModule,
        LoginModule,
        LoginRoutingModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
