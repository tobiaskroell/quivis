import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
};

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./main/components/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: 'help',
                loadChildren: () =>
                    import('./main/components/help/help.module').then(
                        (m) => m.HelpModule
                    ),
            },
            {
                path: 'lab-reports',
                loadChildren: () =>
                    import('./main/components/lab-reports/lab-reports.module').then(
                        (m) => m.LabReportsModule
                    ),
            },
            {
                path: 'landing',
                loadChildren: () =>
                    import('./main/components/landing/landing.module').then(
                        (m) => m.LandingModule
                    ),
            },
            {
                path: 'medical-history',
                loadChildren: () =>
                    import('./main/components/medical-history/medical-history.module').then(
                        (m) => m.MedicalHistoryModule
                    ),
            },
            {
                path: 'medication-plan',
                loadChildren: () =>
                    import('./main/components/medication-plan/medication-plan.module').then(
                        (m) => m.MedicationPlanModule
                    ),
            },
            {
                path: 'nutritional-diary',
                loadChildren: () =>
                    import('./main/components/nutritional-diary/nutritional-diary.module').then(
                        (m) => m.NutritionalDiaryModule
                    ),
            },
        ]
    },

    {
        path: 'accessdenied',
        loadChildren: () =>
            import('./main/components/auth/accessdenied/accessdenied.module').then(
                (m) => m.AccessdeniedModule
            ),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./main/components/auth/error/error.module').then(
                (m) => m.ErrorModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./main/components/auth/login/login.module').then(
                (m) => m.LoginModule
            ),
    },

    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
