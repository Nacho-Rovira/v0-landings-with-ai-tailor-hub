import { TailorHubLogoWithName } from "@/components/Logo/TailorHubLogoWithName"
import { BodyText } from "@/components/BodyText/BodyText"

export default function CoverPage() {
  return (
    <main className="text-left"
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

        

        
      </div>

      <div style={{ width: "100%", maxWidth: "800px" }}>
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
      </div>

      
    </main>
  )
}
