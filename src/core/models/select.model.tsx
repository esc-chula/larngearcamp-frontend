interface SelectModel {
  name: string
  label: string
  contents: Array<{
    text: string
    value: string
  }>
}

export default SelectModel
