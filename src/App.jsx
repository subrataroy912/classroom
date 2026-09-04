import { Route, Router, Routes } from 'react-router'
import Root from './pages/Root'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='*' element={<h1 className='flex items-center justify-center bg-sky-500'>CANT HAVE ANY ROUTE ON THIS URL</h1>} />

    </Routes>
  )
}

export default App
