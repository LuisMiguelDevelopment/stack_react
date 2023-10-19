import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Notes } from './components/pages/Notes'
import { CreateNote } from './components/pages/CreateNote'
import { CreateUser } from './components/pages/CreateUser'
import { Nav } from './components/organisms/Nav'
import { NoteProvier } from './context/noteContext'

function App() {

  return (
    <>
      <NoteProvier>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/createNote" element={<CreateNote />} />
            <Route path="/createUser" element={<CreateUser />} />
          </Routes>
        </BrowserRouter>
      </NoteProvier>
    </>
  )
}

export default App
