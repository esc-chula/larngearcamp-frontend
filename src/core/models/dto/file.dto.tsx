interface FileDTO {
  message: string
  file: {
    name: string
    originalName: string
    type: string
    size: number
    url: string
    createdAt: Date
  }
}

export default FileDTO
