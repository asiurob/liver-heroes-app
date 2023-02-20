import { Header } from "../../shared"
import { HeroList } from "../components"


export const DcPage = () => {
  return (
    <>
      <Header title="DC Heroes"/>
      <HeroList publisher="DC Comics" />
    </>
  )
}
