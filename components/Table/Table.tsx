import type React from "react"
import "./Table.css"

export interface TableRow {
  label: string
  content: React.ReactNode
}

export interface TableProps {
  columns: [string, string] // Two column headers
  rows: TableRow[]
  className?: string
}

export function Table({ columns, rows, className = "" }: TableProps) {
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
          <div className="table-cell table-cell-left">{row.label}</div>
          <div className="table-cell table-cell-right">{row.content}</div>
        </div>
      ))}
    </div>
  )
}
