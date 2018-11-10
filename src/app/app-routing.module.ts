import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from "./pages/login/login.component"
import { MainComponent } from "./pages/main/main.component"

export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
//   { path: 'dashboard', component: DashboardComponent, children: [
//       { path: '', component: ChartsComponent },
//       { path: 'usuarios', component: ListadoDeUsuariosComponent },
//       { path: 'crear-usuario', component: CrearUsuarioComponent },
//       { path: 'reportes', component: ReportesComponent },
//       { path: 'imagenes', component: ImagenesComponent },
//       { path: ':idUsuario/reportes', component: ListadoFormulariosComponent },
//       { path: ':idUsuario/reportes/:categoria', component: ListadoFormulariosComponent },
//       { path: '404', component: NotFoundComponent },
//       { path: '**', redirectTo: '/dashboard/404' }
//     ]
//   },
  { path: '**', redirectTo: '/main' }
]