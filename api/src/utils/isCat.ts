import { CatInterface } from "src/interfaces/cat.interface.js"

export default function isCat(obj: any): obj is CatInterface {
  const {created_at} = obj
  const {cat_id} = obj

  if (created_at) {
    return obj && typeof cat_id === 'string' && typeof created_at === 'string' 
  }
  
  return obj && typeof cat_id === 'string' 
}
