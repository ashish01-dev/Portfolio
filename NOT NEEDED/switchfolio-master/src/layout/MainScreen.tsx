import React from "react"

interface ScreenProps {
  children: React.ReactNode
}

const MainScreen: React.FC<ScreenProps> = ({ children }) => {
  return <div className="main-screen">{children}</div>
}

export default MainScreen
