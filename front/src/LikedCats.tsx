import { useEffect, useState } from 'react'
import heart from './assets/heart.svg'
import './styles/Cats.css'
import CatInfo from './interfaces/catInfo.interface'
import Cat from './interfaces/cat.interface'
import { backendURL } from './url'
import { catAPIUrl } from './url'

export default function LikedCats() {
  const [cats, setCats] = useState<Cat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendURL}/likes`)
  
        const fetchedData: CatInfo[] = await response.json()

        const catsPromises = fetchedData.map(async (catInfo): Promise<Cat> => {
          const {cat_id} = catInfo

          const response = await fetch(`${catAPIUrl}/${cat_id}`) 

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