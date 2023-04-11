import { newsArray } from "./newsInterface"

export async function newsFetch(stockTicker: string) {
  let response = await fetch(`http://localhost:8000/newsFeed?companyName=${stockTicker}`)
  let clean: newsArray = await response.json()
  return clean

}
