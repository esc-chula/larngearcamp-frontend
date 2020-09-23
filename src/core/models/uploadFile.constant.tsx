import DocumentType from "./documentType.constant"

interface UploadFileModel {
  name: DocumentType
  body1: string
  body2: string
  accept: string
  size?: number
  multiple?: boolean
}

export default UploadFileModel
