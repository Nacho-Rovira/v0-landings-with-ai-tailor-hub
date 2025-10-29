import React from "react"
import { MenuSidebar, MenuSidebarItem } from "./MenuSidebar"

/**
 * MenuSidebar component examples
 * These can be used with Storybook or as reference examples
 */

export default {
  title: "Components/MenuSidebar",
  component: MenuSidebar,
}

// Default menu sidebar
export const Default = () => (
  <MenuSidebar>
    <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
    <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
    <MenuSidebarItem href="#about">ABOUT</MenuSidebarItem>
    <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
  </MenuSidebar>
)

// Menu sidebar with active item
export const WithActiveItem = () => (
  <MenuSidebar>
    <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
    <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
    <MenuSidebarItem href="#about" isActive>
      ABOUT
    </MenuSidebarItem>
    <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
  </MenuSidebar>
)

// Menu sidebar with disabled item
export const WithDisabledItem = () => (
  <MenuSidebar>
    <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
    <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
    <MenuSidebarItem href="#about" isActive>
      ABOUT
    </MenuSidebarItem>
    <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
    <MenuSidebarItem href="#coming-soon" isDisabled>
      COMING SOON
    </MenuSidebarItem>
  </MenuSidebar>
)

// Proposal navigation with numbering
export const ProposalNavigation = () => (
  <MenuSidebar>
    <MenuSidebarItem href="#challenge" number={1}>
      THE CHALLENGE
    </MenuSidebarItem>
    <MenuSidebarItem href="#solution" number={2}>
      THE SOLUTION
    </MenuSidebarItem>
    <MenuSidebarItem href="#approach" number={3} isActive>
      THE APPROACH
    </MenuSidebarItem>
    <MenuSidebarItem href="#results" number={4}>
      RESULTS
    </MenuSidebarItem>
    <MenuSidebarItem href="#timeline" number={5}>
      TIMELINE
    </MenuSidebarItem>
    <MenuSidebarItem href="#team" number={6}>
      TEAM
    </MenuSidebarItem>
  </MenuSidebar>
)

