import Logo from '../../Icon/logo'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { faEllipsisVertical, faGlobe, faKeyboard, faLanguage, faMicrophone, faMoon, faSearch, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../Button'
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import React, { useState } from 'react';
import MenuIteam from '../../Menu'
import Wrapper from '../../Popper'

const cx = classNames.bind(styles)

function Header() {

    const [showResult, setShowResult] = useState(false);

    const menu = [
        {
            icon : <FontAwesomeIcon icon={faUserShield}/>,
            title : "Your data in YouTube"
        },
        {
            icon : <FontAwesomeIcon icon={faMoon}/>,
            title : "Appearance: Device theme"
        },
        {
            icon : <FontAwesomeIcon icon={faLanguage}/>,
            title : "Language:English"
        },
        {
            icon : <FontAwesomeIcon icon={faGlobe}/>,
            title : "Location: Vietnam"
        },
        {
            icon : <FontAwesomeIcon icon={faKeyboard}/>,
            title : "Keyboard shortcuts",
            separate: true,
        },
    ]
    
    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo className={cx('icon-logo')}/>
                </div>

                <div className={cx('search')}>
                    <div className={cx('icon-search')}><FontAwesomeIcon icon={faSearch}/></div>
                    <input placeholder='Search' className={cx('input-search')}/>
                    <div className={cx('microphone')}><FontAwesomeIcon icon={faMicrophone} /></div>
                </div>

                <div className={cx('action')}>

                    <HeadlessTippy
                        interactive
                        visible={showResult}
                        onClickOutside={()=>(setShowResult(false))}
                        render={attrs => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                <Wrapper>
                                {
                                    menu.map((data,index)=>{
                                        return(
                                            <MenuIteam key={index} data={data} />
                                        )
                                    })
                                }
                                </Wrapper>
                            </div>
                            )}
                    >
                        <button className={cx('icon-menu')} onClick={()=>{setShowResult(true)}}><FontAwesomeIcon icon={faEllipsisVertical}/></button>
                    </HeadlessTippy>

                    <Button signin>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faUser}/>
                        </span>
                        Sign In
                    </Button>
                </div>
            </div>
        </div> 
    )
}

export default Header