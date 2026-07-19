"use client"

import { SwitchProvider } from "@/components/Context/SwitchContext"
import IndexPage from "@/components/homeScreen/IndexPage"
import MainScreen from "@/layout/MainScreen"
import { TitleUpdater } from "@/utils/TitleUpdater"

const Home = () => {
  return (
    <SwitchProvider>
      <TitleUpdater />
      <MainScreen>
        <IndexPage />
      </MainScreen>
    </SwitchProvider>
  )
}

export default Home