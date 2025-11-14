import "./StepsFlow.css"

export interface Step {
  title: string
  description: string
}

export interface StepsFlowProps {
  steps: Step[]
}

export const StepsFlow: React.FC<StepsFlowProps> = ({ steps }) => {
  return (
    <div className="steps-flow">
      {steps.map((step, index) => (
        <div key={index} className="steps-flow__step">
          <div className="steps-flow__number">{String(index + 1).padStart(2, "0")}</div>
          <div className="steps-flow__content">
            <h4 className="steps-flow__title">{step.title}</h4>
            <p className="steps-flow__description">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
