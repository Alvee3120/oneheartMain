/** Group-company URLs are placeholders until the live sites are provided. */
export function isExternalUrl(url: string) {
  return /^https?:\/\//.test(url);
}
