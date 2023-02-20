import { Header } from "../../shared"
import { HeroList } from "../components"



export const MarvelPage = () => {
  return (
    <>
      <Header title="Marvel Heroes"/>
      <HeroList publisher="Marvel Comics" />
    </>
  )
}
