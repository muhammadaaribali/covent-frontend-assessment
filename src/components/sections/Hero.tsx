import { AddressForm } from "@/components/forms/AddressForm";
import { Container } from "@/components/ui/Container";
export function Hero() {
  return (
    <section id="hero" className="border-b border-border py-20 sm:py-28">
      <Container>
        <p className="text-sm font-bold uppercase tracking-widest text-forest">
          Covent
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl">
          A simpler way to sell your home.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A starting point for a calm, clear home-selling experience.
        </p>
        <div className="mt-8 max-w-xl">
          <AddressForm />
        </div>
      </Container>
    </section>
  );
}
