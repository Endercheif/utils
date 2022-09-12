import { isBrowser, isDeno, isNode } from "./platform.ts";

export function readJsonSync<T>(path: string): T {
  let json;
  if (isDeno()) {
    // @ts-ignore: for Deno only
    json = Deno.readTextFileSync(path);
  } else if (isNode()) {
    // @ts-ignore: for NodeJS only
    json = require("fs").readFileSync(path);
  } else {
    throw Error("readJsonSync not supported in browser.");
  }
  return JSON.parse(json);
}

export async function readJson<T>(path: string): Promise<T> {
  let json;
  if (isDeno()) {
    // @ts-ignore: for Deno only
    json = await Deno.readTextFile(path);
  } else if (isNode()) {
    // @ts-ignore: for NodeJS only
    json = require("fs").readFile(path);
  } else if (isBrowser()) {
    return (await fetch(path)).json();
  } else {
    throw Error("Cannot determine environment.");
  }
  return JSON.parse(json);
}
