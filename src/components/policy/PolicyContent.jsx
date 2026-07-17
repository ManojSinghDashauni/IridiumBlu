import PolicySection from "./PolicySection";

export default function PolicyContent({ sections }) {
  return (
    <div className="min-w-0">

      {sections.map((section) => (
        <PolicySection
          key={section.id}
          section={section}
        />
      ))}

    </div>
  );
}