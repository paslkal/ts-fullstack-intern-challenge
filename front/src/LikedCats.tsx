import { useEffect, useState } from 'react'
import heart from './assets/heart.svg'
import './styles/Cats.css'
import CatInfo from './interfaces/catInfo.interface'
import Cat from './interfaces/cat.interface'

export default function LikedCats() {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'http://localhost:3000/likes'
        const response = await fetch(url)
  
        const fetchedData: CatInfo[] = await response.json()

        const catsPromises = fetchedData.map(async (catInfo): Promise<Cat> => {
          const {cat_id} = catInfo

          const response = await fetch(`https://api.thecatapi.com/v1/images/${cat_id}`) 

          const cat: Cat = await response.json()

          return cat
        })
  
        const fetchedCats = await Promise.all(catsPromises)

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
              <div className="cat-container">
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