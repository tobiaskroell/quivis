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
                path: 'notfound',
                loadChildren: () =>
                    import('./main/components/notfound/notfound.module').then(
                        (m) => m.NotfoundModule
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

    { path: '**', redirectTo: '/notfound' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
