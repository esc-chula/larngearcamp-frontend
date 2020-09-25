interface FileDTO {
  message: string
  file: {
    name: string
    originalName: string
    type: string
    size: number
    url: string
  }
}

export default FileDTO
