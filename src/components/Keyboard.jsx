import React, {useEffect, useRef} from 'react'
// import './key.scss'
import '../UI/homeContent/keyboard.scss'


const Keyboard = ({button, help}) => {
    const form = useRef()

    useEffect(() => {
        // eslint-disable-next-line
        Array.from(form.current.children).map(e => {
            // eslint-disable-next-line
            Array.from(e.childNodes).map(el => {
                if (el.className === 'arrows') {
                    // eslint-disable-next-line
                    Array.from(el.childNodes).map(element => {
                        if (element.className.includes(button)) {
                            element.classList.add('show')
                            setTimeout(() => {
                                element.classList.remove('show')
                            }, 1000)
                        }
                    })
                }
                if (el.className.includes(button)) {
                    el.classList.add('show')
                    setTimeout(() => {
                        el.classList.remove('show')
                    }, 1000)
                }
            })
        })
        // eslint-disable-next-line
    })
    //, [help]
    return (
        <div ref={form} className={'keyboard'}>
            <div className={'keyboard-string'}>
                <div className={'button-`'}>
                    ~
                </div>
                <div className={'button-1'}>
                    1
                </div>
                <div className={'button-2'}>
                    2
                </div>
                <div className={'button-3'}>
                    3
                </div>
                <div className={'button-4'}>
                    4
                </div>
                <div className={'button-5'}>
                    5
                </div>
                <div className={'button-6'}>
                    6
                </div>
                <div className={'button-7'}>
                    7
                </div>
                <div className={'button-8'}>
                    8
                </div>
                <div className={'button-9'}>
                    9
                </div>
                <div className={'button-0'}>
                    0
                </div>
                <div className={'button--'}>
                    -
                </div>
                <div className={'button-='}>
                    +
                </div>
                <div className={`button-Backspace control`} id={'flex1'}>
                    delete
                </div>
            </div>
            <div className={'keyboard-string'}>
                <div className={'button-Tab control'} id={'flex2'}>
                    tab
                </div>
                <div className={'button-q'}>
                    q
                </div>
                <div className={'button-w'}>
                    w
                </div>
                <div className={'button-e'}>
                    e
                </div>
                <div className={'button-r'}>
                    r
                </div>
                <div className={'button-t'}>
                    t
                </div>
                <div className={'button-y'}>
                    y
                </div>
                <div className={'button-u'}>
                    u
                </div>
                <div className={'button-i'}>
                    i
                </div>
                <div className={'button-o'}>
                    o
                </div>
                <div className={'button-p'}>
                    p
                </div>
                <div className={'button-['}>
                    [
                </div>
                <div className={'button-]'}>
                    ]
                </div>
                <div className={`button-\\005C`}>
                    \
                </div>
            </div>
            <div className={'keyboard-string'}>
                <div className={'button-CapsLock control'} id={'flex2'}>
                    caps lock
                </div>
                <div className={'button-a'}>
                    a
                </div>
                <div className={'button-s'}>
                    s
                </div>
                <div className={'button-d'}>
                    d
                </div>
                <div className={'button-f'}>
                    f
                </div>
                <div className={'button-g'}>
                    g
                </div>
                <div className={'button-h'}>
                    h
                </div>
                <div className={'button-j'}>
                    j
                </div>
                <div className={'button-k'}>
                    k
                </div>
                <div className={'button-l'}>
                    l
                </div>
                <div className={'button-;'}>
                    ;
                </div>
                <div className={`button-'`}>
                    '
                </div>
                <div className={'button-Enter control'} id={'flex2'}>
                    return
                </div>
            </div>
            <div className={'keyboard-string'}>
                <div className={'button-Shift control'} id={'flex2'}>
                    shift
                </div>
                <div className={'button-z'}>
                    z
                </div>
                <div className={'button-x'}>
                    x
                </div>
                <div className={'button-c'}>
                    c
                </div>
                <div className={'button-v'}>
                    v
                </div>
                <div className={'button-b'}>
                    b
                </div>
                <div className={'button-n'}>
                    n
                </div>
                <div className={'button-m'}>
                    m
                </div>
                <div className={'button-,'}>
                    &lt;
                </div>
                <div className={'button-.'}>
                    &gt;
                </div>
                <div className={'button-/'}>
                    /
                </div>
                <div className={'button-Shift control'} id={'flex2'}>
                    shift
                </div>
            </div>
            <div className={'keyboard-string'}>
                <div className={'button-fn control'}>
                    fn
                </div>
                <div className={'button-Control control'}>
                    control
                </div>
                <div className={'button-Alt control'}>
                    option
                </div>
                <div className={'button-Meta control'} id={'flex1'}>
                    command
                </div>
                <div className={'button- control'} id={'flex-space'}>

                </div>
                <div className={'button-Meta control'} id={'flex1'}>
                    command
                </div>
                <div className={'button-Alt control'}>
                    option
                </div>
                <div className={'button-ArrowLeft'}>
                    &#8672;
                </div>
                <div className={'arrows'}>
                    <div className={'button-ArrowUp'}>
                        &#8673;
                    </div>
                    <div className={'button-ArrowDown'}>
                        &#8675;
                    </div>
                </div>
                <div className={'button-ArrowRight'}>
                    &#8674;
                </div>
            </div>
        </div>
    )
}


export default Keyboard