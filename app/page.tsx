import { TailorHubLogoWithName } from "@/components/Logo/TailorHubLogoWithName"
import { BodyText } from "@/components/BodyText/BodyText"

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

        <BodyText
          sections={[
            {
              title: "HOW TO CREATE A LANDING PAGE",
              paragraphs: [
                "1. Describe your landing page requirements in natural language",
                "2. Specify the sections you need (hero, features, testimonials, etc.)",
                "3. The generator will create a page using Tailor Hub design tokens",
                "4. All components follow the established design system",
                "5. Review and customize the generated page as needed",
              ],
            },
          ]}
        />

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
