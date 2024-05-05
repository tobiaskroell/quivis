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
                path: 'landing',
                loadChildren: () =>
                    import('./main/components/landing/landing.module').then(
                        (m) => m.LandingModule
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
