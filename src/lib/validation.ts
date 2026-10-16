export function validateAddress(address: string): string | null {
  return address.trim() ? null : "Enter your home address to continue.";
}
