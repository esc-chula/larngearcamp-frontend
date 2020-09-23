interface MeModel {
  id: string
  email: string
  role: string
  name: {
    first: string
    last: string
    display: string
  }
  createdAt: Date
  updatedAt: Date
}

export default MeModel
