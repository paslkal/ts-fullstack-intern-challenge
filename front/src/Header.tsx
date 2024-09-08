import { useState } from 'react'
import './styles/Header.css'

type active = 'all-cats' | 'liked-cats'

export default function Header() {
  const [active, setActive] = useState<active>('all-cats')

  const handleClick = (newActive: active) => {
    setActive(newActive)
  }

  return (
    <header>
      <nav>
        <a 
          href="#" 
          className={active === 'all-cats' ? 'active' : 'not-active'}
          onClick={() => handleClick('all-cats')}
        >
          Все котики
        </a>
        
        <a 
          href="#" 
          className={active === 'liked-cats' ? 'active' : 'not-active'}
          onClick={() => handleClick('liked-cats')}
        >
          Любимые котики
        </a>
      </nav>
    </header>
  )
}