import assert from "node:assert/strict";
import test from "node:test";

import { duplicateNameErrors } from "./validation.mjs";

test("reports duplicate names without rejecting distinct entries", () => {
  const errors = duplicateNameErrors("data/example.yml", [
    { name: "Example" },
    { name: "Distinct" },
    { name: " example " },
  ]);

  assert.deepEqual(errors, [
    "data/example.yml entry 3 ( example ): duplicate name; first appears at entry 1",
  ]);
});
