import React from 'react'

export function Context(SContext: React.Context<any>, selector?: (v: any) => any) {
  return function(target: any, key: any): any {
    const originalRender = target['render']

    function render(this: any, ...args: any[]) {
      return React.createElement(SContext.Consumer, { children: value => {
        let selected: { [key: string]: any } = value
        if (selector) {
          selected = selector(value)
        }
        if (selected._onchange) {
          selected._onchange(() => this.forceUpdate())
        }
        this[key] = selected
        return originalRender.bind(this as any)(...args)
      }})
    }

    target['render'] = render
  }
}