import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { CalculadoraComponent } from "../../pages/calculadora/components/calculadora.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "calculadora", component: CalculadoraComponent },
];
