import PolicyHero from "./PolicyHero";
import PolicySidebar from "./PolicySidebar";
import PolicyContent from "./PolicyContent";
import PolicyContact from "./PolicyContact";

export default function PolicyLayout({ policy }) {
  return (
    <main className="bg-background text-foreground">

      {/* Hero */}
      <PolicyHero policy={policy} />

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[280px_1fr]">

          {/* Sidebar */}
          <PolicySidebar sections={policy.sections} />

          {/* Policy Content */}
          <PolicyContent sections={policy.sections} />

        </div>

      </section>

      {/* Contact Section */}
      <PolicyContact />

    </main>
  );
}