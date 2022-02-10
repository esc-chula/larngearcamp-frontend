interface ButtonModel {
  label: string
  opensDialog: boolean
  dialogType?: string
  path?: string
  isExternalPath?: boolean
}

interface StepInfoModel {
  title: React.ReactNode
  contents: React.ReactNode
  primaryButton?: ButtonModel
  secondaryButton?: ButtonModel
}

interface StepStateModel {
  true: StepInfoModel
  false?: StepInfoModel
}

interface StepModel {
  incomplete: StepStateModel
  inProgress: StepStateModel
  complete: StepStateModel
}

interface StepCardModel {
  1: StepModel
  2: StepModel
  3: StepModel
  4: StepModel
  5: StepModel
  6: StepModel
}

export default StepCardModel
