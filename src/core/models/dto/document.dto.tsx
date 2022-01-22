import DocumentType from "../../constants/documentType.constant"

export interface DocumentItem {
  originalName?: string
  url: string
}

type DocumentDTO = {
  [index in DocumentType]: DocumentItem
}

/**
 * @deprecated
 */
export function friendlyFileName(name: string | undefined): string {
  if (!name) {
    return ""
  }
  return name.substr(0, name.lastIndexOf(".")) || name
}

export function isDefaultUrl(url: string) {
  return url.endsWith("dummy.png") || url.endsWith("dummy.pdf")
}

export default DocumentDTO
