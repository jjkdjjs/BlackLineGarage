import Home from './pages/Home'
import Contato from './pages/Contato'
import Projetos from './pages/Projetos'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'

function App() {
  switch (window.location.pathname) {
    case '/contato':
      return <Contato />
    case '/projetos':
      return <Projetos />
    case '/servicos':
      return <Servicos />
    case '/sobre':
      return <Sobre />
    default:
      return <Home />
  }
}

export default App
