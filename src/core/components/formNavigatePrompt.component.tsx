import React from "react"
import { useFormContext } from "react-hook-form"
import { Prompt } from "react-router-dom"

const FormNavigatePrompt = () => {
  const { formState } = useFormContext()
  return (
    <Prompt
      when={formState.isSubmitting || (formState.isDirty && !formState.isSubmitted)}
      message="You haven't submitted your form. Are you sure you want to leave?"
    />
  )
}

export { FormNavigatePrompt }
