import { Navbar } from '../../shared'
import { Routes, Route, Navigate } from 'react-router-dom'
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../'

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <div className="container my-5">
        <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/marvel" element={<MarvelPage />} />
            <Route path="/dc" element={<DcPage />} />
            <Route path="/hero/:id" element={<HeroPage />} />
            <Route path="/" element={<Navigate to="/search" />} />
        </Routes>
    </div>
  </>
  )
}
