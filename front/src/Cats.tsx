import { useEffect, useState } from "react"
import './styles/Cats.css'
import heart from './assets/heart.svg'
import Cat from "./interfaces/cat.interface"
import { backendURL, catAPIUrl } from "./url"

export default function Cats() {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${catAPIUrl}/search?limit=10`)
  
        const fetchedCats: Cat[] = await response.json()
  
        setCats(fetchedCats)        
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleClick = (cat_id: string) => {
    try {
      fetch(`${backendURL}/likes`, {
        method: 'POST',
        body: JSON.stringify({cat_id}),
        headers: {"Content-Type": "application/json"}
      })

      console.log('click')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main>
      <div className="cats-grid">
        {
          cats.map((cat) => {
            const {url} = cat

            return(
              <div className="cat-container" key={cat.id}>
                <img src={url} alt="cat" className="cat-image"/>
                <img 
                  src={heart} 
                  alt="heart" 
                  className="heart-image"
                  onClick={() => handleClick(cat.id)}
                />
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
