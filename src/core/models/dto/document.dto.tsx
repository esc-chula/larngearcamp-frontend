import DocumentType from "../documentType.constant"

export interface DocumentItem {
  name?: string
  url: string
}

type DocumentDTO = {
  [index in DocumentType]: DocumentItem
}

export function friendlyFileName(name: string | undefined): string {
  if (!name) {
    return ""
  }
  return name.replace(/(\w+).(\w+).(jpeg|jpg|png|pdf)/, "$3")
}

export function isDefaultUrl(url: string) {
  return url.endsWith("dummy.png") || url.endsWith("dummy.pdf")
}

export default DocumentDTO
