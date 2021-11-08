interface StepModel {
  incomplete: {
    pass: {
      title: React.ReactNode
      contents: React.ReactNode
    }
    fail?: {
      title: React.ReactNode
      contents: React.ReactNode
    }
  }
  inProgress: {
    pass: {
      title: React.ReactNode
      contents: React.ReactNode
      buttons?: Array<Array<string>>
    }
    fail?: {
      title: React.ReactNode
      contents: React.ReactNode
      buttons?: Array<Array<string>>
    }
  }
  complete: {
    pass: {
      title: React.ReactNode
      contents: React.ReactNode
    }
    fail?: {
      title: React.ReactNode
      contents: React.ReactNode
    }
  }
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
