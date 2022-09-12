type _node = { process: unknown };
export type IsNode = typeof globalThis extends _node ? true : false;

type _deno = { Deno: unknown };
export type IsDeno = typeof globalThis extends _deno ? true : false;

export function isNode(): IsNode {
  // @ts-ignore: works in Node
  return "process" in globalThis && "global" in globalThis;
}

export function isDeno(): IsDeno {
  // @ts-ignore: works in Deno
  return "Deno" in globalThis;
}

export function isBrowser(): boolean {
  return !isNode() && !isDeno();
}
