"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Plus } from "lucide-react"
import "./FAQ.css"

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQProps {
  items: FAQItem[]
  className?: string
}

export function FAQ({ items, className = "" }: FAQProps) {
  return (
    <div className={`faq ${className}`}>
      <Accordion type="single" collapsible className="faq__accordion">
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="faq__item">
            <AccordionTrigger className="faq__trigger">
              <span className="faq__question">{item.question}</span>
              <Plus className="faq__icon" />
            </AccordionTrigger>
            <AccordionContent className="faq__content">
              <p className="faq__answer">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
