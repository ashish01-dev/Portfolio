"use client"
import React from "react"
import { FaGithub } from "react-icons/fa6"

const StarButton: React.FC = () => {
  const [count, setCount] = React.useState(0)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    fetch("https://api.github.com/repos/ashish01-dev/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.stargazers_count || 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <a href="https://github.com/ashish01-dev/portfolio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 p-1.5 hover:bg-zinc-800 rounded-md transition-colors">
      <FaGithub className="text-zinc-400 hover:text-white" size={18} />
      <span className="text-zinc-400 text-sm font-medium hidden sm:block">
        {loading ? "..." : count}
      </span>
    </a>
  )
}
export default StarButton