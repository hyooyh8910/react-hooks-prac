import React from 'react'
//hasMounted라고 하는 props를 넣어주는 hoc
export default function withHasMounted(Component) {
  class NewComponent extends React.Component {
    state = {
      hasMounted: false,
    }
    render() {
      const { hasMounted } = this.state
      return <Component {...this.props} hasMounted={hasMounted} />
    }
    componentDidMount() {
      this.setState({ hasMounted: true })
    }
  }

  NewComponent.displayName = `withHasMounted(${Component.name})`

  return NewComponent
}
