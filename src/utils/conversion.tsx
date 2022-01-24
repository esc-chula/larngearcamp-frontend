export const pxToRem = (px: number) => `${px / 16}rem`

export const dateToLocaleString = (isoString: string) => {
  const date = new Date(isoString)
  return (
    "วันที่ " + date.toLocaleDateString("th-TH", { dateStyle: "long" }) + " เวลา " + date.toLocaleTimeString("th-TH", { timeStyle: "short" }) + " น."
  )
}
