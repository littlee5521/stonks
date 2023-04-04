import { stockJson } from "./stockInterface"

export async function fetchStock(name: string) {
  let json = await fetch(`https://api.iex.cloud/v1/data/CORE/IEX_TOPS/${name}?token=pk_9065cf818149449b9cc4e05397d5844d`, { mode: 'cors' })
  let response: stockJson[] = await json.json()
  return response
}
