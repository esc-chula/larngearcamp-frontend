export const wordcut = require("wordcut")

// wordcut.init()

export const wordCount = (text: string) => {
  wordcut.init()
  const words = (wordcut.cut(text.trim()) as string).split("|").filter((word: string) => word.trim().length > 1)
  // const words = text
  return words.length
}