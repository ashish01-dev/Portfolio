import React from "react"

interface ScreenProps {
  children: React.ReactNode
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <div className="screen">{children}</div>
}

export default Screen
