"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { validateAddress } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

export function AddressForm() {
  const id = useId();
  const inputId = `${id}-address`;
  const errorId = `${id}-error`;
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validateAddress(address);
    setError(nextError);
    if (nextError) {
      setSubmitted(false);
      inputRef.current?.focus();
      return;
    }
    setSubmitted(true);
  }
  if (submitted)
    return (
      <div
        role="status"
        className="rounded-card border border-border bg-surface p-5"
      >
        <p className="font-semibold">Demo only: nothing was sent or saved</p>
        <p className="mt-2 text-sm text-muted">{address}</p>
        <Button
          type="button"
          variant="ghost"
          className="mt-3 px-0"
          onClick={() => {
            setSubmitted(false);
            inputRef.current?.focus();
          }}
        >
          Edit address
        </Button>
      </div>
    );
  return (
    <form onSubmit={submit} noValidate>
      <label className="block text-sm font-semibold" htmlFor={inputId}>
        Home address
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          ref={inputRef}
          id={inputId}
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
            setError(null);
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          aria-required="true"
          autoComplete="off"
          className="min-h-11 flex-1 rounded-pill border border-border bg-surface px-4 text-ink placeholder:text-muted"
          placeholder="123 Main Street"
        />{" "}
        <Button type="submit">Get my offer</Button>
      </div>
      {error && (
        <p
          id={errorId}
          role="alert"
          className="mt-2 text-sm font-semibold text-error"
        >
          {error}
        </p>
      )}
    </form>
  );
}
