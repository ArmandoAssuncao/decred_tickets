import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { Store } from 'react-redux'
import mockStore from 'test/mockStore'

const nodeWithStoreProp = (node: JSX.Element, store: Store<any>): JSX.Element => {
    return React.cloneElement(node, { store })
}

export const shallowStore = <P, S>(node: JSX.Element, state: any = {}): ShallowWrapper<P, S> => {
    const store = mockStore(state)
    return shallow<P, S>(nodeWithStoreProp(node, store), {
        context: { store }
    }).shallow()
}
