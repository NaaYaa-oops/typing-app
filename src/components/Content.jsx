import React from 'react'
import '../UI/homeContent/wrapper.scss'
import Input from './Input'
import Keyboard from './Keyboard'


const Content = () => {
    return (
        <div className={'home-wrapper'}>
            <Input/>
            <Keyboard/>
        </div>
    )
}

export default Content