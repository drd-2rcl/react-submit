import React, { Component } from 'react'

class RenderInput extends Component {
  state = {
    inputAccesses: false
  }

  showInput = () => {
    console.log('click')
    this.setState({ inputAccesses: true })
  }

  enableInput = () => {
    this.setState({ inputAccesses: true })
  }

  disableInput = () => {
    this.setState({ inputAccesses: false })
  }

  render() {
    const { inputAccesses } = this.state
    return (
      <div>
        <button onClick={this.enableInput} >Habilitar input</button>
        <span>Input abaixo:</span>
        <div>
          { inputAccesses ? 
            <div>
              <input placeholder="Digite aqui..." />
            </div> : null
          }
        </div>
        <button onClick={this.disableInput} >Desabilitar input</button>
      </div>
    )
  }
}

export default RenderInput