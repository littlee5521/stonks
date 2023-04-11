import React from "react";
import { newsFetch } from "../script/newsFetch";
import { useState } from "react";
import { useEffect } from "react";

export function NewsCard(props: props) {
  const [newsUrl, setNewsUrl] = useState('someurl.com')
  const [imgUrl, setImgUrl] = useState('someurl.com')
  const [title, setTitle] = useState('someStock info')
  const [text, setText] = useState('some info')
  const [author, setAuthor] = useState('some guy')
  useEffect(() => {
    newsFetch(props.stockName).then((responseArray) => {
      let response = responseArray.data[0]

      console.log('/////////////////////////////////////////////////////////////////////////////////////')
      console.log(response)
      setNewsUrl(response.news_url)
      setImgUrl(response.image_url)
      setTitle(response.title)
      setText(response.text)
      setAuthor(response.source_name)
    })
  })

  return (
    <div>
      <a target='_blank' href={newsUrl}>{title}</a>
      <img src={imgUrl}></img>
    </div>
  )
}

interface props {
  stockName: string
}
