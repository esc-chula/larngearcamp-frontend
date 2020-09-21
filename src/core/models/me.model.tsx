interface MeModel {
  name: {
    first: string
    last: string
    display: string
  }
  surname: string
  email: string
  id: string
  createdAt: Date
  updatedAt: Date
}

export default MeModel
