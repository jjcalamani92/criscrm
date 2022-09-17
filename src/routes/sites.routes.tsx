import { useRouter } from "next/router"
import { FC } from "react"
import { HeroPortfolio0 } from "../components"
import { Header0 } from "../components/header"
import { Header0Portfolio } from "../components/header/portfolio"

interface Sites {
}
export const Sites: FC<Sites> = ({ }) => {
  const { asPath } = useRouter()
  switch (asPath) {
    case '/sites/123456789': return (
      <>
      <Header0Portfolio />
      <HeroPortfolio0 />
      {/* <Header0 /> */}
      </>
    )
    case '/sites/123456789/blog': return (
      <>
      <Header0Portfolio />
      </>
    )
   
    default:
      return null

  }

}