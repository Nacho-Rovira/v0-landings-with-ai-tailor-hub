import React from "react"
import "./TechStackSection.css"

export interface TechCategory {
  /** Category title (e.g., "Front-end & Mobile") */
  title: string
  /** Array of technology names */
  technologies: string[]
}

export interface TechStackSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of technology categories to display */
  categories?: TechCategory[]
}

const defaultCategories: TechCategory[] = [
  {
    title: "Front-end & Mobile",
    technologies: [
      "REACT JS",
      "NEXT JS",
      "VUE JS",
      "ANGULAR",
      "TAILWIND CSS",
      "TYPESCRIPT",
      "REACT NATIVE",
      "EXPO",
      "IONIC",
    ],
  },
  {
    title: "Back-end",
    technologies: ["NODE", "EXPRESS", "TYPESCRIPT", "MONGO", "SQL", "NESTJS"],
  },
  {
    title: "Data & IA",
    technologies: ["PYTHON", "LANGCHAIN", "OPENAI GPT-40", "AZURE OPENAI", "MCP", "A2A"],
  },
  {
    title: "CMS/e-commerce",
    technologies: ["WORDPRESS", "CONTENTFUL", "DATO CMS", "SANITY", "SHOPIFY"],
  },
  {
    title: "Infraestructura",
    technologies: ["KUBERNETES", "DOCKER", "AWS", "AZURE"],
  },
]

export const TechStackSection = React.forwardRef<HTMLDivElement, TechStackSectionProps>(
  ({ categories = defaultCategories, className = "", ...props }, ref) => {
    const classes = ["tech-stack-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {categories.map((category, index) => (
          <div key={index} className="tech-stack-section__card">
            {/* Category Title */}
            <h3 className="tech-stack-section__category">{category.title}</h3>

            {/* Technologies List */}
            <ul className="tech-stack-section__list">
              {category.technologies.map((tech, techIndex) => (
                <li key={techIndex} className="tech-stack-section__item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
  },
)

TechStackSection.displayName = "TechStackSection"
