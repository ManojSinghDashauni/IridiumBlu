export default function PolicySidebar({ sections }) {
    return (
      <aside className="hidden lg:block">
  
        <div className="sticky top-28 rounded-3xl border border-border bg-card p-6 shadow-sm">
  
          {/* Heading */}
          <h3 className="font-display text-2xl text-foreground">
            Contents
          </h3>
  
          <p className="mt-2 text-sm text-muted-foreground">
            Quick navigation
          </p>
  
          {/* Divider */}
          <div className="my-6 h-px bg-border" />
  
          {/* Navigation */}
          <nav className="space-y-2">
  
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:bg-secondary
                  hover:text-primary
                "
              >
  
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  {index + 1}
                </span>
  
                <span className="line-clamp-1">
                  {section.title}
                </span>
  
              </a>
            ))}
  
          </nav>
  
        </div>
  
      </aside>
    );
  }