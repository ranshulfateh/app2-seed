import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { AuthRoutes } from './+auth/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AuthRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
