import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PeriodicTable } from './pages/PeriodicTable/PeriodicTable';
import { Atom } from './components/Element/Element';

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
        <Route path="/molecules">
          <Route index element={<h1>Molecules</h1>} />
          <Route path=":id" element={<h1>Molecule</h1>} />
        </Route>
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}