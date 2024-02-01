import { useEffect, useState } from 'react'

import './App.css'

function App() {
  //state
  const [time, setTime] = useState(new Date())

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = birthDate - now //convert milliseconds to seconds

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24)) //convert milliseconds to days
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) //convert milliseconds to hours
    )
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60)) //convert milliseconds to minutes
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000) //convert milliseconds to seconds

    return [days, hours, minutes, seconds]
  }

  useEffect(() => {
    const intervalTask = setInterval(() => {
      setTime(new Date())
    }, 1000) //1000 millisecond = 1 second
    return () => clearInterval(intervalTask)
  }, [])

  // Set birthDate to 18th August
  let birthDate = new Date(time.getFullYear(), 7, 18) // Note: month is zero-based index, so 7 represents August

  let [days, hours, minutes, seconds] = getCountdown(birthDate)

  return (
    <div className='container'>
      <h1>Countdown to 18th August</h1>
      <p>Days: {days}, Hours: {hours}, Minutes: {minutes}, Seconds: {seconds}</p>
    </div>
  )
}

export default App
