export function getOAuthCallbackPath(): string {
  return '/auth/callback'
}

export function getOAuthCallbackUrl(origin: string): string {
  return `${origin}${getOAuthCallbackPath()}`
}
