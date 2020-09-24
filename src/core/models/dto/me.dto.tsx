interface MeDTO {
  id: string
  email: string
  role: string
  name: {
    first: string
    last: string
    display: string
  }
  application: {
    code: string
    picture: string
    applicationState: string
    documentState: string
    editingState: string
  }
  createdAt: Date
  updatedAt: Date
}

export default MeDTO
