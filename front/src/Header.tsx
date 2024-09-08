import './styles/Header.css'

export default function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="active">Все котики</a>
        <a href="#" className="not-active">Любимые котики</a>
      </nav>
    </header>
  )
}