"use client"

import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { BodyText, type BodyTextSection } from "../BodyText/BodyText"
import { Insight } from "../Insight/Insight"
import "./ProjectModal.css"

export interface ProjectModalData {
  /** Project title */
  title: string
  /** Project category */
  category: string
  /** Project image URL */
  imageSrc: string
  /** Project image alt text */
  imageAlt: string
  /** Body text sections (Challenge, Client, etc.) */
  sections: BodyTextSection[]
  /** Project insights/metrics */
  insights?: Array<{
    value: string
    label: string
  }>
}

export interface ProjectModalProps {
  /** Project data to display */
  project: ProjectModalData
  /** Trigger element (usually a Card) */
  children: React.ReactNode
}

export const ProjectModal = React.forwardRef<HTMLDivElement, ProjectModalProps>(({ project, children }, ref) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="project-modal" showCloseButton={true}>
        <div className="project-modal__container">
          {/* Left Column: Project Image */}
          <div className="project-modal__image-column">
            <img src={project.imageSrc || "/placeholder.svg"} alt={project.imageAlt} className="project-modal__image" />
          </div>

          {/* Right Column: Content */}
          <div className="project-modal__content-column">
            {/* Header */}
            <div className="project-modal__header">
              <p className="project-modal__breadcrumb">/ PROJECTS</p>
              <h2 className="project-modal__title">{project.title}</h2>
            </div>

            {/* Body Text Sections */}
            <div className="project-modal__body">
              <BodyText sections={project.sections} />
            </div>

            {/* Insights */}
            {project.insights && project.insights.length > 0 && (
              <div className="project-modal__insights">
                {project.insights.map((insight, index) => (
                  <Insight key={index} value={insight.value} label={insight.label} />
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
})

ProjectModal.displayName = "ProjectModal"
