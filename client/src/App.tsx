import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PeriodicTable } from './pages/PeriodicTable/PeriodicTable';
import { Atom } from './components/Element/Element';
import { Species } from './pages/Species/Species';
import { About } from './pages/About';

export const App = () => {
  const [atoms, setAtoms] = useState<Atom[]>([])

  useEffect(() => {
    fetch('http://localhost:1359/ptable/elements')
      .then(res => res.json())
      .then(data => setAtoms(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PeriodicTable atoms={atoms} />} />
        <Route path="/species">
          <Route index element={<Species />} />
          <Route path=":id" element={<Species />} />
        </Route>
        <Route path="/atom" element={<h1>Atom Info</h1>}>
          <Route path="ion/:id" element={<Species />} />
          <Route path="isotope:id" element={<Species />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/lab" element={<h1>Lab</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}