interface ProfileDTO {
  title: string
  userEmail?: string
  name: string
  surname: string
  nickname: string
  birthDate: string
  religion: string
  education: string
  school: string
  province: string
  health: {
    bloodType: string
    congenitalDisease: string
    allergicFood: string
    allergicDrug: string
    drug: string
  }
  contact: {
    recipient: string
    address: string
    subDistrict: string
    district: string
    province: string
    zip: string
    phoneNumber: string
    homeNumber: string
    facebookName: string
    lineId: string
    parentName: string
    parentNumber: string
    parentRelationship: string
  }
}

export default ProfileDTO
