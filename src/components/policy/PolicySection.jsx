export default function PolicySection({ section }) {
    return (
      <section
        id={section.id}
        className="scroll-mt-32 border-b border-border py-12 last:border-none"
      >
        {/* Heading */}
        <div className="mb-8">
  
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Section
          </span>
  
          <h2 className="mt-2 font-display text-4xl text-foreground">
            {section.title}
          </h2>
  
        </div>
  
        {/* Paragraphs */}
        {section.paragraphs && (
          <div className="space-y-5">
            {section.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="leading-8 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
  
        {/* Bullet List */}
        {section.list && (
          <ul className="mt-8 space-y-4">
  
            {section.list.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4"
              >
                <div className="mt-2 h-2 w-2 rounded-full bg-primary" />
  
                <span className="leading-7 text-muted-foreground">
                  {item}
                </span>
              </li>
            ))}
  
          </ul>
        )}
  
        {/* Numbered List */}
        {section.steps && (
          <ol className="mt-8 space-y-6">
  
            {section.steps.map((step, index) => (
              <li
                key={index}
                className="flex gap-5"
              >
  
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
  
                <p className="pt-2 leading-7 text-muted-foreground">
                  {step}
                </p>
  
              </li>
            ))}
  
          </ol>
        )}
  
        {/* Highlight Box */}
        {section.note && (
          <div className="mt-10 rounded-2xl border border-primary/20 bg-secondary/30 p-6">
  
            <h4 className="mb-2 font-semibold text-primary">
              Important
            </h4>
  
            <p className="leading-7 text-muted-foreground">
              {section.note}
            </p>
  
          </div>
        )}
  
        {/* Table */}
        {section.table && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
  
            <table className="w-full">
  
              <tbody>
  
                {section.table.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-none"
                  >
                    <td className="w-1/3 bg-muted px-6 py-4 font-medium">
                      {row.label}
                    </td>
  
                    <td className="px-6 py-4 text-muted-foreground">
                      {row.value}
                    </td>
                  </tr>
                ))}
  
              </tbody>
  
            </table>
  
          </div>
        )}
  
      </section>
    );
  }