export function isNode(): boolean {
  return "process" in globalThis && "global" in globalThis;
}

export function isDeno(): boolean {
  return "Deno" in globalThis;
}

export function isBrowser(): boolean {
  return !isNode && !isDeno;
}
