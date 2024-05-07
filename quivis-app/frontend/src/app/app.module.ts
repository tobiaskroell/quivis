import { NgModule } from '@angular/core';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { DashboardRoutingModule } from './pages/dashboard/dashboard-routing.module';
import { LabReportsRoutingModule } from './pages/lab-reports/lab-reports-routing.module';
import { MedicalHistoryRoutingModule } from './pages/medical-history/medical-history-routing.module';
import { MedicationPlanRoutingModule } from './pages/medication-plan/medication-plan-routing.module';
import { NutritionalDiaryRoutingModule } from './pages/nutritional-diary/nutritional-diary-routing.module';
import { NotfoundModule } from './pages/notfound/notfound.module';
import { NotfoundRoutingModule } from './pages/notfound/notfound-routing.module';
import { LandingRoutingModule } from './pages/landing/landing-routing.module';
import { HelpRoutingModule } from './pages/help/help-routing.module';
import { LandingModule } from './pages/landing/landing.module';
import { AccessdeniedModule } from './auth/accessdenied/accessdenied.module';
import { AccessdeniedRoutingModule } from './auth/accessdenied/accessdenied-routing.module';
import { ErrorRoutingModule } from './auth/error/error-routing.module';
import { ErrorModule } from './auth/error/error.module';
import { LoginModule } from './auth/login/login.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { MedicalHistoryAddModule } from './pages/medical-history-add/medical-history-add.module';
import { MedicalHistoryEntryModule } from './pages/medical-history-entry/medical-history-entry.module';
import { MedicalHistoryEntryRoutingModule } from './pages/medical-history-entry/medical-history-entry-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
        LoginRoutingModule,
        MedicalHistoryAddModule,
        MedicalHistoryEntryModule,
        MedicalHistoryEntryRoutingModule,
        HttpClientModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
