import { useState, useEffect } from "React"

export const TimeOut = (timeout = 1000) => {
  const [done, setDone] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, timeout)
  }, [])

  return done
}
