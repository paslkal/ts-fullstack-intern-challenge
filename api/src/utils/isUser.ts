import { UserInterface } from "src/interfaces/user.interface.js"

export default function isUser(obj: any): obj is UserInterface {
  const { login } = obj
  const { password } = obj

  return obj && typeof password === 'string' && typeof login === 'string' 
}