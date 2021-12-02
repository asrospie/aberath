import { dev } from '$app/env';

export function useURI() {
    if (dev) {
        return import.meta.env.VITE_STRAPI_DEV;
    }
    return import.meta.env.VITE_STRAPI_PROD;
}