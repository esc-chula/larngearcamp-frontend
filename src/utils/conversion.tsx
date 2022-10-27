export const pxToRem = (px: number) => `${px / 16}rem`

export const dateToLocaleString = (isoString: string) => {
  const date = new Date(isoString)
  return (
    "วันที่ " + date.toLocaleDateString("th-TH", { dateStyle: "long" }) + " เวลา " + date.toLocaleTimeString("th-TH", { timeStyle: "short" }) + " น."
  )
}

export const resolveRegistraionTime = (isoString: string) => {
  const date = new Date(isoString)
  let startTime : string = (date.getHours()-1).toString() + ":" + (date.getMinutes()+15).toString()
  for (let i = 0; i < 5-startTime.length; i++) {
    startTime = "0" + startTime
  }
  let endTime : string = (date.getHours()-1).toString() + ":" + (date.getMinutes()+45).toString()
  for (let i = 0; i < 5-endTime.length; i++) {
    endTime = "0" + endTime
  }
  return (
   startTime + " ถึง " + endTime + " น."
  )
} 