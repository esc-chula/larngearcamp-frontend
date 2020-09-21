declare module "thai-address-database"

interface AddressLocation {
  amphoe: string
  district: string
  province: string
  zipcode: string
}

export const searchAddressByDistrict: (district: string) => AddressLocation[]
export const searchAddressByAmphoe: (amphoe: string) => AddressLocation[]
export const searchAddressByProvince: (province: string) => AddressLocation[]
export const searchAddressByZipcode: (zipcode: string) => AddressLocation[]
