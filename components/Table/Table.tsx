import type React from "react"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"
import "./Table.css"

export interface TableRow {
  label: string
  content: React.ReactNode
  tooltip?: string // Added optional tooltip for labels with asterisks
}

export interface TableProps {
  columns: [string, string] // Two column headers
  rows: TableRow[]
  className?: string
}

export function Table({ columns, rows, className = "" }: TableProps) {
  const renderLabel = (row: TableRow) => {
    const hasAsterisk = row.label.includes("*")
    const labelText = hasAsterisk ? row.label.replace("*", "").trim() : row.label

    if (hasAsterisk && row.tooltip) {
      return (
        <span style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs, 8px)" }}>
          {labelText}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    color: "var(--color-text-tertiary, #999999)",
                  }}
                  aria-label="More information"
                >
                  <Info size={16} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p style={{ maxWidth: "300px" }}>{row.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </span>
      )
    }

    return labelText
  }

  return (
    <div className={`table-container ${className}`}>
      {/* Table Header */}
      <div className="table-header">
        <div className="table-header-cell table-header-cell-left">{columns[0]}</div>
        <div className="table-header-cell table-header-cell-right">{columns[1]}</div>
      </div>

      {/* Table Rows */}
      {rows.map((row, index) => (
        <div key={index} className={`table-row ${index === rows.length - 1 ? "table-row-last" : ""}`}>
          <div className="table-cell table-cell-left">{renderLabel(row)}</div>
          <div className="table-cell table-cell-right">{row.content}</div>
        </div>
      ))}
    </div>
  )
}
