import { useEffect, useState } from "react"
import './styles/Cats.css'
import heart from './assets/heart.svg'
import Cat from "./interfaces/cat.interface"
import { backendURL, catAPIUrl } from "./url"
import NewCat from "./interfaces/newCat.interface"
import clickedHeart from './assets/clicked-heart.svg'

export default function Cats() {
  const [cats, setCats] = useState<NewCat[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${catAPIUrl}/search?limit=10`)
  
        const fetchedCats: Cat[] = await response.json()
  
        const newCats: NewCat[] = fetchedCats.map((cat) => {
          const newCat = {...cat, isLiked: false}

          return newCat
        })

        setCats(newCats)        
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  const handleClick = (catId: string) => {
    const cat = cats.find(cat => cat.id === catId)
    
    if (!cat?.isLiked) {
      try {
        fetch(`${backendURL}/likes`, {
          method: 'POST',
          body: JSON.stringify({cat_id: catId}),
          headers: {"Content-Type": "application/json"}
        })
  
        changeLike(catId, true)

      } catch (error) {
        console.error(error)
      }
    } else {
      try {
        fetch(`${backendURL}/likes/${catId}`, {method: 'DELETE'})
        
        changeLike(catId, false)
      } catch (error) {
        console.error(error);
      }      
    }
  }

  const changeLike = (catId: string, isLiked: boolean) => {
    const changedCats = cats.map(cat => {
      if (cat.id === catId) {
        return {...cat, isLiked: isLiked}
      }

      return cat
    })

    setCats(changedCats)
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
                  src={cat.isLiked ? clickedHeart : heart} 
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
