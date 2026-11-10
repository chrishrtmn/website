import { createHash } from 'node:crypto';

// sha256-<base64> of an inline script or style body, as CSP expects it
export const cspHash = (body: string) => `sha256-${createHash('sha256').update(body).digest('base64')}` as const;
