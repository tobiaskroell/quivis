import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled', // When set to 'enabled', clicking on an anchor link within the application will smoothly scroll to the corresponding section or element with the matching id attribute.
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
                    import('./pages/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    ),
            },
            {
                path: 'help',
                loadChildren: () =>
                    import('./pages/help/help.module').then(
                        (m) => m.HelpModule
                    ),
            },
            {
                path: 'lab-reports',
                loadChildren: () =>
                    import('./pages/lab-reports/lab-reports.module').then(
                        (m) => m.LabReportsModule
                    ),
            },
            {
                path: 'landing',
                loadChildren: () =>
                    import('./pages/landing/landing.module').then(
                        (m) => m.LandingModule
                    ),
            },
            {
                path: 'medical-history',
                loadChildren: () =>
                    import('./pages/medical-history/medical-history.module').then(
                        (m) => m.MedicalHistoryModule
                    ),
            },
            {
                path: 'medication-plan',
                loadChildren: () =>
                    import('./pages/medication-plan/medication-plan.module').then(
                        (m) => m.MedicationPlanModule
                    ),
            },
            {
                path: 'nutritional-diary',
                loadChildren: () =>
                    import('./pages/nutritional-diary/nutritional-diary.module').then(
                        (m) => m.NutritionalDiaryModule
                    ),
            },
            {
                path: 'medical-history/:id/:title',
                loadChildren: () =>
                    import('./pages/nutritional-diary/nutritional-diary.module').then(
                        (m) => m.NutritionalDiaryModule
                    ),

            }
        ]
    },

    {
        path: 'accessdenied',
        loadChildren: () =>
            import('./auth/accessdenied/accessdenied.module').then(
                (m) => m.AccessdeniedModule
            ),
    },
    {
        path: 'error',
        loadChildren: () =>
            import('./auth/error/error.module').then(
                (m) => m.ErrorModule
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./auth/login/login.module').then(
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
