import React from "react"
import "./BudgetSection.css"

export interface BudgetItem {
  /** Category or line item name */
  category: string
  /** Description of the budget item */
  description?: string
  /** Amount in currency */
  amount: string
}

export interface BudgetSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of budget line items */
  items: BudgetItem[]
  /** Total amount */
  total: string
  /** Optional payment terms or notes */
  notes?: string[]
}

export const BudgetSection = React.forwardRef<HTMLDivElement, BudgetSectionProps>(
  ({ items, total, notes, className = "", ...props }, ref) => {
    const classes = ["budget-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Budget Items */}
        <div className="budget-section__items">
          {items.map((item, index) => (
            <div key={index} className="budget-section__item">
              <div className="budget-section__item-info">
                <div className="budget-section__item-category">{item.category}</div>
                {item.description && <div className="budget-section__item-description">{item.description}</div>}
              </div>
              <div className="budget-section__item-amount">{item.amount}</div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="budget-section__total">
          <div className="budget-section__total-label">TOTAL</div>
          <div className="budget-section__total-amount">{total}</div>
        </div>

        {/* Optional Notes */}
        {notes && notes.length > 0 && (
          <div className="budget-section__notes">
            {notes.map((note, index) => (
              <div key={index} className="budget-section__note">
                {note}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)

BudgetSection.displayName = "BudgetSection"
