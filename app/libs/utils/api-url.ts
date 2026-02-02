/**
 * API URL을 만들기 위한 유틸.
 *
 * - 브라우저 환경: 현재 origin + pathname
 * - 서버/테스트 환경: 상대경로 pathname 그대로 반환
 */
export function getApiUrl(pathname: string): string {
  if (!pathname.startsWith('/')) {
    pathname = `/${pathname}`
  }

  if (typeof window === 'undefined') {
    return pathname
  }

  return new URL(pathname, window.location.origin).toString()
}
