interface DocumentItem {
  name?: string
  url: string
}

interface DocumentDTO {
  picture: DocumentItem
  transcript: DocumentItem
  letterOfConsent: DocumentItem
}

export default DocumentDTO
