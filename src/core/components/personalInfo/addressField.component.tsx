import React, { useMemo, useEffect, useCallback } from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextFieldComponent } from "../textField.component"
import { searchAddressByDistrict, searchAddressByAmphoe, searchAddressByProvince, searchAddressByZipcode } from "./thai-address-database"
import { useFormContext } from "react-hook-form"

interface AddressFieldComponentProps {
  label: string
  type: "district" | "amphoe" | "province" | "zipcode"
}

const inputNames: Record<string, string> = {
  district: "contact.subDistrict",
  amphoe: "contact.district",
  province: "contact.province",
  zipcode: "contact.zip"
}

const AddressFieldComponent: React.FC<AddressFieldComponentProps> = ({ label, type }) => {
  const { register, watch, setValue } = useFormContext()
  const value = watch(inputNames[type], "")

  useEffect(() => {
    register(inputNames[type])
  }, [register, type])

  const options = useMemo(() => {
    switch (type) {
      case "district":
        return searchAddressByDistrict(value)
      case "amphoe":
        return searchAddressByAmphoe(value)
      case "province":
        return searchAddressByProvince(value)
      case "zipcode":
        return searchAddressByZipcode(value)
    }
  }, [value, type])

  const handleChange = useCallback(
    (_event, newValue) => {
      if (newValue) {
        if (typeof newValue === "string") {
          setValue(inputNames[type], newValue)
        } else {
          Object.keys(newValue).forEach(key => {
            setValue(inputNames[key], newValue[key])
          })
        }
      }
    },
    [setValue, type]
  )

  const handleInputChange = useCallback(
    (_event, newInputValue) => {
      setValue(inputNames[type], newInputValue)
    },
    [setValue, type]
  )

  return (
    <Autocomplete
      freeSolo
      value={value}
      onChange={handleChange}
      inputValue={value}
      onInputChange={handleInputChange}
      disableClearable
      renderOption={option => <span>{`${option.district} ${option.amphoe} ${option.province} ${option.zipcode}`}</span>}
      getOptionLabel={option => {
        if (typeof option === "string") {
          return option
        } else {
          return option[type]
        }
      }}
      id="controllable-states-demo"
      options={options}
      renderInput={params => <TextFieldComponent name={inputNames[type]} label={label} {...params} />}
    />
  )
}

export default AddressFieldComponent
