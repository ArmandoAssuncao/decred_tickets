import React from 'react'
import 'react-native'
import { shallow } from 'enzyme'

import PickerStakePool from '../index'

describe('PickerStakePool', () => {
    const wrapper = shallow(<PickerStakePool value={'decredBrasil'} onChange={jest.fn()} />)

    it('match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('has 1 Styled(PickerNB)', () => {
        expect(wrapper.find('Styled(PickerNB)')).toHaveLength(1)
    })

    it('has 2 Item', () => {
        expect(wrapper.find('Item')).toHaveLength(2)
    })

    it('has Item whit prop value equal null', () => {
        expect(wrapper.find('Item').at(0).prop('value')).toEqual(null)
    })

    it('has Item whit prop value equal "decredBrasil"', () => {
        expect(wrapper.find('Item').at(1).prop('value')).toEqual('decredBrasil')
    })

    describe('actions', () => {
        it('call onValueChange when pressed', () => {
            wrapper.props().onValueChange()
            expect(wrapper.prop('onValueChange')).toBeCalled()
        })
    })
})
