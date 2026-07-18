"use client"
import { useState } from "react"

interface Option {
  value: string
  label: string
}

const Select = ({ options }: { options: Option[] }) => {
  const [selectedOption, setSelectedOption] = useState<string>("")
  return (
    <div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="w-full px-3 py-1 bg-zinc-900 border border-zinc-700 rounded-md 
                   focus:outline-none focus:border-zinc-500 hover:border-zinc-500 appearance-none cursor-pointer transition duration-100"
      >
        <option value="Show all">Show all</option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className=" hover:bg-zinc-800"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
