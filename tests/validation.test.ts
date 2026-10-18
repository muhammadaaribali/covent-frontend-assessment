import { describe, expect, it } from "vitest";
import { validateAddress } from "../src/lib/validation";
describe("validateAddress", () => {
  it("rejects empty and whitespace-only addresses", () => {
    expect(validateAddress("")).toBeTruthy();
    expect(validateAddress("  \n ")).toBeTruthy();
  });
  it("accepts a non-empty address", () => {
    expect(validateAddress("123 Main Street")).toBeNull();
  });
});
