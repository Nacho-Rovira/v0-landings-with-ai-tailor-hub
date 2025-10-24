import { TailorHubLogoWithName } from "@/components/Logo/TailorHubLogoWithName"

export default function CoverPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--spacing-xl)",
        backgroundColor: "var(--color-bg-surface)",
        gap: "var(--spacing-xl)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--spacing-lg)",
          maxWidth: "800px",
        }}
      >
        <TailorHubLogoWithName size="large" />

        <h1
          style={{
            fontSize: "var(--font-size-2xl)",
            fontWeight: "var(--font-weight-bold)",
            color: "var(--color-text-primary)",
            marginTop: "var(--spacing-xl)",
            fontFamily: "var(--font-heading)",
            textAlign: "center",
          }}
        >
          Landing Page Generator
        </h1>

        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "var(--font-size-base)",
            lineHeight: "var(--line-height-relaxed)",
            fontFamily: "var(--font-body)",
            textAlign: "center",
          }}
        >
          Welcome to the Tailor Hub Landing Page Generator. This tool helps you create custom landing pages using our
          design system.
        </p>

        <div
          style={{
            backgroundColor: "var(--color-bg-muted)",
            padding: "var(--spacing-lg)",
            borderRadius: "var(--radius-md)",
            marginTop: "var(--spacing-md)",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-semibold)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-sm)",
              fontFamily: "var(--font-heading)",
            }}
          >
            How to Create a Landing Page:
          </h2>
          <ol
            style={{
              paddingLeft: "var(--spacing-lg)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-sm)",
              color: "var(--color-text-secondary)",
              fontSize: "var(--font-size-base)",
              lineHeight: "var(--line-height-relaxed)",
              fontFamily: "var(--font-body)",
            }}
          >
            <li>Describe your landing page requirements in natural language</li>
            <li>Specify the sections you need (hero, features, testimonials, etc.)</li>
            <li>The generator will create a page using Tailor Hub design tokens</li>
            <li>All components follow the established design system</li>
            <li>Review and customize the generated page as needed</li>
          </ol>
        </div>

        <p
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-tertiary)",
            marginTop: "var(--spacing-md)",
            fontFamily: "var(--font-body)",
            textAlign: "center",
          }}
        >
          All generated pages use design tokens from the Tailor Hub design system, ensuring consistency and brand
          alignment.
        </p>
      </div>
    </main>
  )
}
