import { useEffect, useState } from "react"
import './styles/Cats.css'
import heart from './assets/heart.svg'
import Cat from "./interfaces/cat.interface"
import { catAPIUrl } from "./url"

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

  return (
    <main>
      <div className="cats-grid">
        {
          cats.map((cat) => {
            const {url} = cat

            return(
              <div className="cat-container" key={cat.id}>
                <img src={url} alt="cat" className="cat-image"/>
                <img src={heart} alt="heart" className="heart-image"/>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
