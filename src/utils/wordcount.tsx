import { Wordcut } from "wordcut-ts"
import { WordcutCore } from "wordcut-ts/lib/wordcut_core"

let wordcut: WordcutCore
try {
  wordcut = new Wordcut()
  wordcut.initNoDict()
} catch (e) {
  console.log("wordcut init err", e)
}

export const wordCount = (text: string) => {
  if (!wordcut) {
    console.log("wordcut not init")
    return text.length
  }
  const words = (wordcut.cut(text.trim()) as string).split("|").filter((word: string) => word.trim().length > 1)
  // const words = text
  return words.length
}
