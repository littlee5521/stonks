import { stockJson } from "./stockInterface"

export async function fetchStock(name: string) {
  let json = await fetch(`http://localhost:8000/stockInfo/?companyName=${name}`)
  let response = await json.json()
  return response
}
