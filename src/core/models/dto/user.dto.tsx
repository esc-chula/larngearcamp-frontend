interface UserDTO {
  createdAt: string
  email: string
  id: string
  name: {
    display: string | null
    first: string
    last: string
  }
  role: "admin" | "user"
  updatedAt: string
}

export default UserDTO
