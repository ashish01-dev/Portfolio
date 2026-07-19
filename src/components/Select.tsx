"use client"
import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SelectProps {
  options: string[]
  placeholder: string
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => { document.removeEventListener("mousedown", handleClickOutside) }
  }, [])

  const handleSelect = (option: string) => {
    setSelected(option)
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-md flex items-center justify-between hover:border-zinc-600 transition-colors"
      >
        <span className={selected ? "text-white" : "text-zinc-500"}>
          {selected || placeholder}
        </span>
        <svg className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-700 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto"
          >
            {options.map((option) => (
              <motion.li
                key={option}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-4 py-2 ${selected === option ? "bg-zinc-800 text-white" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`}
                >
                  {option}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      )}
    </div>
  )
}
export default Select