import React, { Component } from 'react'

export default class CustomInput extends Component {
  render () {
    const {
      input: { value, onChange }
    } = this.props
    return (
      <div className='form-group'>
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          className='form-control'
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
}
