import Home from './pages/Home'
import Contato from './pages/Contato'

function App() {
  return window.location.pathname === '/contato' ? <Contato /> : <Home />
}

export default App
