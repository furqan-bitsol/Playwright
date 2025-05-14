// URL helper functions for Playwright E2E tests

import { baseUrl } from './test-data';

export const getRouteUrl = (route: string) => `${baseUrl}${route}`;
