interface newsObject {
  news_url: string
  image_url: string
  title: string
  text: string
  source_name: string
  date: string
  topics: {
    0: string
    sentiment: string
    type: string
  }
}

export interface newsArray {
  data: newsObject[]
}
