"use client"

import { useState } from "react"
import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { TitleSection } from "@/components/TitleSection/TitleSection"

export default function SantanderProposalPage() {
  return (
    <LandingLayout>
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="TEST" title="Testing Page" />
      </section>
    </LandingLayout>
  )
}
