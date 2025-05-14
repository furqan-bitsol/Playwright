// URL helper functions for Playwright E2E tests

export const baseUrl = 'https://ecommerce-omega-three-23.vercel.app';

export const getRouteUrl = (route: string) => `${baseUrl}${route}`;
