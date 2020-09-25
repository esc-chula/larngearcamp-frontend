import React from "react"

interface ErrorBoundaryProps {
  hasError: boolean
  error: any
  errorInfo: any
}

class ErrorBoundary extends React.Component<{}, ErrorBoundaryProps> {
  constructor(props: any) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      ...this.state,
      error: error,
      errorInfo: errorInfo
    })
  }

  render() {
    if (this.state?.hasError) {
      return (
        <div>
          <div>Something Wrong</div>
          <div>{this.state.error}</div>
          <div>{this.state.errorInfo}</div>
        </div>
      )
    }
    return this.props.children
  }
}

export { ErrorBoundary }
