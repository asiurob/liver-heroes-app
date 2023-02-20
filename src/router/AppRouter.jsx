import { AuthPage } from "../auth/pages/AuthPage"
import { HeroesRoutes } from "../heroes/"
import { Route, Routes } from "react-router-dom"
import { PrivateRouter } from "./PrivateRouter"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        <Route path='*' element={ 
          <PrivateRouter> 
              <HeroesRoutes />
          </PrivateRouter>
          }/>
      </Routes>
    </>
  )
}
