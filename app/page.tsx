import { TailorHubLogoWithName } from "@/components/Logo/TailorHubLogoWithName"
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/vrai-proposal')
}

// function CoverPage() {
//   return (
//     <main
//       className="text-left"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "var(--spacing-xl)",
//         backgroundColor: "var(--color-bg-surface)",
//         gap: "var(--spacing-xl)",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <TailorHubLogoWithName size="large" />
//       </div>

//       <div style={{ width: "100%", maxWidth: "900px" }}>
//         <h2
//           style={{
//             fontFamily: "var(--font-mono)",
//             fontSize: "var(--text-size-xsmall)",
//             fontWeight: 500,
//             textTransform: "uppercase",
//             letterSpacing: "0.05em",
//             color: "var(--color-text-secondary)",
//             marginBottom: "var(--spacing-l)",
//             textAlign: "center",
//           }}
//         >
//           EXAMPLE PROMPTS
//         </h2>

//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "var(--spacing-m)",
//           }}
//         >
//           {/* Example 1 */}
//           <div
//             style={{
//               padding: "var(--spacing-l)",
//               backgroundColor: "var(--color-neutral-50)",
//               borderRadius: "var(--radius-s, 16px)",
//               border: "1px solid var(--color-neutral-200)",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontSize: "var(--text-size-xsmall)",
//                 color: "var(--color-text-secondary)",
//                 marginBottom: "var(--spacing-xs)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Full Development Proposal
//             </p>
//             <p
//               style={{
//                 fontFamily: "var(--font-default)",
//                 fontSize: "var(--text-size-small)",
//                 color: "var(--color-text-primary)",
//                 lineHeight: "var(--text-line-s)",
//               }}
//             >
//               "Create a new proposal for Zara (fashion retail). They need an omnichannel e-commerce platform with inventory management. Include: challenge, technology stack, 6-month roadmap with 4 phases, detailed budget (€350K), team of 5, case studies, and FAQ."
//             </p>
//           </div>

//           {/* Example 2 */}
//           <div
//             style={{
//               padding: "var(--spacing-l)",
//               backgroundColor: "var(--color-neutral-50)",
//               borderRadius: "var(--radius-s, 16px)",
//               border: "1px solid var(--color-neutral-200)",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontSize: "var(--text-size-xsmall)",
//                 color: "var(--color-text-secondary)",
//                 marginBottom: "var(--spacing-xs)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Introduction Proposal (No Budget)
//             </p>
//             <p
//               style={{
//                 fontFamily: "var(--font-default)",
//                 fontSize: "var(--text-size-small)",
//                 color: "var(--color-text-primary)",
//                 lineHeight: "var(--text-line-s)",
//               }}
//             >
//               "Create an introduction proposal for BBVA Bank. Focus on internal tools and employee platforms. No budget needed - this is for initial contact. Include: context, our capabilities, how we work, technology, services, team, case studies, next steps, and FAQ. Emphasize ISO 27001 certification."
//             </p>
//           </div>

//           {/* Example 3 */}
//           <div
//             style={{
//               padding: "var(--spacing-l)",
//               backgroundColor: "var(--color-neutral-50)",
//               borderRadius: "var(--radius-s, 16px)",
//               border: "1px solid var(--color-neutral-200)",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontSize: "var(--text-size-xsmall)",
//                 color: "var(--color-text-secondary)",
//                 marginBottom: "var(--spacing-xs)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Hospitality Proposal
//             </p>
//             <p
//               style={{
//                 fontFamily: "var(--font-default)",
//                 fontSize: "var(--text-size-small)",
//                 color: "var(--color-text-primary)",
//                 lineHeight: "var(--text-line-s)",
//               }}
//             >
//               "Create a proposal for Marriott Hotels. They need a guest experience platform with mobile check-in and loyalty integration. Timeline: 8 months, 5 phases. Budget: €420K. Include detailed roadmap, team of 6, hospitality case studies, infrastructure & support section, and FAQ."
//             </p>
//           </div>

//           {/* New Example 4 */}
//           <div
//             style={{
//               padding: "var(--spacing-l)",
//               backgroundColor: "var(--color-neutral-50)",
//               borderRadius: "var(--radius-s, 16px)",
//               border: "1px solid var(--color-neutral-200)",
//             }}
//           >
//             <p
//               style={{
//                 fontFamily: "var(--font-mono)",
//                 fontSize: "var(--text-size-xsmall)",
//                 color: "var(--color-text-secondary)",
//                 marginBottom: "var(--spacing-xs)",
//                 textTransform: "uppercase",
//               }}
//             >
//               Technology Consulting Proposal
//             </p>
//             <p
//               style={{
//                 fontFamily: "var(--font-default)",
//                 fontSize: "var(--text-size-small)",
//                 color: "var(--color-text-primary)",
//                 lineHeight: "var(--text-line-s)",
//               }}
//             >
//               "Create a proposal for IBM. They need a technology consulting service to optimize their cloud infrastructure. Timeline: 3 months, 3 phases. Budget: €200K. Include: current infrastructure analysis, recommended improvements, detailed roadmap, team of 4, case studies, and FAQ."
//             </p>
//           </div>
//         </div>

//         {/* Documentation link */}
//         <p
//           style={{
//             fontFamily: "var(--font-default)",
//             fontSize: "var(--text-size-xsmall)",
//             color: "var(--color-text-secondary)",
//             textAlign: "center",
//             marginTop: "var(--spacing-l)",
//           }}
//         >
//           For more examples and best practices, check the documentation folder
//         </p>
//       </div>
//     </main>
//   )
// }
