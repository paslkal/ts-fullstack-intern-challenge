import { useEffect, useState } from "react"
import './styles/Cats.css'
import heart from './assets/heart.svg'

interface Cat{
  id: string,
  height: number,
  width: number,
  url: string
}

export default function Cats() {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(' https://api.thecatapi.com/v1/images/search?limit=10')

      const fetchedCats: Cat[] = await response.json()

      setCats(fetchedCats)
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
              <div className="cat-image-container">
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
