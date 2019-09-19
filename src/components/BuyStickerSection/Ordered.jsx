import React, { useState, useEffect } from "react"
import axios from "axios"

let saved_data = null
const Ordered = ({ tag, text }) => {
  const [loaded, setLoaded] = useState(false)
  const [data, setData] = useState()

  const Tag = tag || "h1"
  useEffect(() => {
    async function fetch() {
      if (!saved_data) {
        const { data } = await axios.get(
          "https://us-central1-angrycom.cloudfunctions.net/sticker/amount"
        )
        saved_data = data
      }
      setData(saved_data)
      setLoaded(true)
    }
    fetch()
  }, [])
  if (!loaded) {
    return <Tag>로드 중...</Tag>
  }
  return (
    <Tag>
      {text
        ? text(data)
        : `현재 ${data.data}장 구매됨 (개당 ${data.predict}원 예상)`}
    </Tag>
  )
}

export default Ordered
