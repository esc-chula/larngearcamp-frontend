import React from "react"

interface LoadingProps {
  loading: boolean
}

const LoadingComponent: React.FC<LoadingProps> = ({ loading }) => {
  if (loading) {
    return <div>Loading</div>
  }
  return <></>
}

export { LoadingComponent }
