import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SkipLink from './components/SkipLink'
import { useTheme } from './hooks/useTheme'
import Home from './pages/Home'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-svh bg-bg text-ink">
      <SkipLink />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Home />
      </main>
      <Footer />
    </div>
  )
}
