export const pxToRem = (px: number) => `${px / 16}rem`

export const dateToLocaleString = (isoString: string) => {
  const date = new Date(isoString)
  return (
    "วันที่ " + date.toLocaleDateString("th-TH", { dateStyle: "long" }) + " เวลา " + date.toLocaleTimeString("th-TH", { timeStyle: "short" }) + " น."
  )
}

export const dateToInterviewRound = (isoString: string) => {
  const date = new Date(isoString)
  const hours = date.getHours()

  const formattedDate = date.toLocaleDateString("th-TH", { dateStyle: "long" });

  let timeOfDay = ''
  if (hours >= 9 && hours < 12) {
    timeOfDay = 'รอบเช้า'
  } else if (hours >= 13 && hours < 16) {
    timeOfDay = 'รอบบ่าย'
  }

  return `วันที่ ${formattedDate} ${timeOfDay}`;
}

export const resolveRegistrationTime = (formattedDateString: string) => {

  const timeOfDay = formattedDateString.includes('รอบเช้า') ? 'morning' : 'afternoon'

  if (timeOfDay === 'morning') {
    return "8:15 ถึง 8:45 น."
  } else if (timeOfDay === 'afternoon') {
    return "12:15 ถึง 12:45 น."
  } else {
    return "เวลาลงทะเบียนไม่อยู่ในช่วงที่กำหนด"
  }
}

/*export const resolveRegistraionTime = (isoString: string) => {
  const date = new Date(isoString)
  let startTime: string = (date.getHours() - 1).toString() + ":" + (date.getMinutes() + 15).toString()
  for (let i = 0; i < 5 - startTime.length; i++) {
    startTime = "0" + startTime
  }
  let endTime: string = (date.getHours() - 1).toString() + ":" + (date.getMinutes() + 45).toString()
  for (let i = 0; i < 5 - endTime.length; i++) {
    endTime = "0" + endTime
  }
  return startTime + " ถึง " + endTime + " น."
}*/
