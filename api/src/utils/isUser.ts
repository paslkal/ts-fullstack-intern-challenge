import { user } from "src/interfaces/user.interface.js"

export default function isUser(obj: any): obj is user {
  const { login } = obj
  const { password } = obj

  return obj && typeof password === 'string' && typeof login === 'string' 
}