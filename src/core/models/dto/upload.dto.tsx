interface UploadFileDTO {
  picture: {
    bucket: string
    name: string
    url: string
  }
  transcript: {
    bucket: string
    name: string
    url: string
  }
  letterOfConsent: {
    bucket: string
    name: string
    url: string
  }
}

export default UploadFileDTO
