"use client"

import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import "./TeamMemberModal.css"

export interface TeamMemberData {
  /** Member name */
  name: string
  /** Job title */
  title: string
  /** Member photo URL */
  imageSrc: string
  /** Member photo alt text */
  imageAlt: string
  /** Bio paragraphs */
  bio: string[]
  /** Languages */
  languages?: string
  /** Technical skills */
  skills?: string
}

export interface TeamMemberModalProps {
  /** Team member data to display */
  member: TeamMemberData
  /** Trigger element (usually a TeamCard) */
  children: React.ReactNode
}

export const TeamMemberModal = React.forwardRef<HTMLDivElement, TeamMemberModalProps>(({ member, children }, ref) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="team-member-modal" showCloseButton={true}>
        <div className="team-member-modal__container">
          {/* Left Column: Member Photo */}
          <div className="team-member-modal__image-column">
            <img
              src={member.imageSrc || "/placeholder.svg"}
              alt={member.imageAlt}
              className="team-member-modal__image"
            />
          </div>

          {/* Right Column: Member Info */}
          <div className="team-member-modal__content-column">
            {/* Name and Title */}
            <div className="team-member-modal__header">
              <h2 className="team-member-modal__name">{member.name}</h2>
              <p className="team-member-modal__title">{member.title}</p>
            </div>

            {/* Bio */}
            <div className="team-member-modal__bio">
              {member.bio.map((paragraph, index) => (
                <p key={index} className="team-member-modal__bio-text">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Languages */}
            {member.languages && (
              <div className="team-member-modal__section">
                <p className="team-member-modal__section-text">{member.languages}</p>
              </div>
            )}

            {/* Skills */}
            {member.skills && (
              <div className="team-member-modal__section">
                <p className="team-member-modal__section-text">{member.skills}</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
})

TeamMemberModal.displayName = "TeamMemberModal"
