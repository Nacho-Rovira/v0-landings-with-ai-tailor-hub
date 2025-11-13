import type React from "react"
import "./TechBox.css"

export interface TechBoxProps {
  title: string
  technologies: string[]
  fullWidth?: boolean
}

export const TechBox: React.FC<TechBoxProps> = ({ title, technologies, fullWidth = false }) => {
  return (
    <div className={`tech-box ${fullWidth ? "tech-box--full-width" : ""}`}>
      <h4 className="tech-box__title">{title}</h4>
      <ul className="tech-box__list">
        {technologies.map((tech, index) => (
          <li key={index} className="tech-box__item">
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
