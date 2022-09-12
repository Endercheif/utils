import { build, emptyDir } from "https://deno.land/x/dnt@0.30.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./index.ts"],
  outDir: "./npm",
  shims: {},
  package: {
    name: "@endercheif/utils",
    version: Deno.args[0],
    description: "Endercheif's utils library.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.come/endercheif/utils",
    },
  },
});

Deno.copyFileSync("README.md", "npm/README.md");
Deno.copyFileSync("LICENSE", "npm/LICENSE");
