import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Component from './component'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays panel message', () => {
    render(<Component/>, node, () => {
      console.log(node.innerHTML);
      expect(node.innerHTML).toContain('This is a moo')
    })
  })
})
