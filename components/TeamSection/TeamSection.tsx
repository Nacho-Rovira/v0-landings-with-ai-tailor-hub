import React from "react"
import { TeamCard } from "../TeamCard/TeamCard"
import { TeamMemberModal, type TeamMemberData } from "../TeamMemberModal/TeamMemberModal"
import "./TeamSection.css"

export interface TeamMember {
  /** Member name */
  name: string
  /** Job title */
  title: string
  /** Member photo */
  imageSrc: string
  /** Photo alt text */
  imageAlt: string
  /** Full member data for modal */
  modalData: TeamMemberData
}

export interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of team members to display */
  members: TeamMember[]
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  ({ members, className = "", ...props }, ref) => {
    const classes = ["team-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="team-section__grid">
          {members.map((member, index) => (
            <TeamMemberModal key={index} member={member.modalData}>
              <TeamCard imageSrc={member.imageSrc} imageAlt={member.imageAlt} name={member.name} title={member.title} />
            </TeamMemberModal>
          ))}
        </div>
      </div>
    )
  },
)

TeamSection.displayName = "TeamSection"
