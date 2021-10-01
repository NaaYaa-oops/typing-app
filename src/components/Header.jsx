import React from 'react'
import '../UI/homeHeader/header.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDizzy, faKeyboard, faMapPin} from '@fortawesome/free-solid-svg-icons'
import {useSelector} from 'react-redux'


const Header = () => {
    const charPerMinute = useSelector(state => state.typing.charCount)
    const accuracy = useSelector(state => state.typing.accuracy)
    const typos = useSelector(state => state.typing.typos)
    return (
        <div className={'home-header'}>
            <div className={'home-header__container'}>
                <div className={'home-header__icon'}>
                    <FontAwesomeIcon icon={faKeyboard}/>
                </div>
                <div>
                    <h1 className={'home-header__h1'}>{Math.trunc(charPerMinute)}</h1>
                    <span className={'home-header__span'}>char/min</span>
                </div>
            </div>
            <div className={'home-header__container'}>
                <div className={'home-header__icon'}>
                    <FontAwesomeIcon icon={faMapPin}/>
                </div>
                <div>
                    <h1 className={'home-header__h1'}>{accuracy > 1 && Math.trunc(accuracy)}
                        <span>%</span></h1>
                    <span className={'home-header__span'}>accuracy</span>
                </div>
            </div>
            <div className={'home-header__container'}>
                <div className={'home-header__icon'}>
                    <FontAwesomeIcon icon={faDizzy}/>
                </div>
                <div>
                    <h1 className={'home-header__h1'}>{typos <= 0 ? 0 : typos}
                    </h1>
                    <span className={'home-header__span'}>typos</span>
                </div>
            </div>
        </div>
    )
}

export default Header