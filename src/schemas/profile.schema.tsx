import yup, { object, string } from "yup"

const ProfileSchema = object().shape({
  id: string().trim().required(),
  userid: string().trim().required(),
  userEmail: string().trim().required(),
  code: string().trim().required(),
  title: string().trim().required(),
  name: string().trim().required(),
  surname: string().trim().required(),
  nickname: string().trim().required(),
  birthDate: string().trim().required(),
  religion: string().trim().required(),
  education: string().trim().required(),
  school: string().trim().required(),
  province: string().trim().required(),
  health: object().shape({
    bloodType: string().trim().required(),
    cogenitalDisease: string().trim().required(),
    allergicFood: string().trim().required(),
    allergicDrug: string().trim().required(),
    drug: string().trim().required()
  }),
  contact: object().shape({
    bucket: string().trim().required(),
    name: string().trim().required(),
    url: string().trim().required()
  })
})

export type ProfileModel = yup.InferType<typeof ProfileSchema>

export default ProfileSchema
