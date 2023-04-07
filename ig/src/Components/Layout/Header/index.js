import Logo from '../../Icon/logo'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { faEllipsisVertical, faMicrophone, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../Button'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles)

function Header() {
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

                    <Tippy
                        interactive
                        render={attrs => (
                            <div className="box" tabIndex="-1" {...attrs}>
                                My tippy box
                            </div>
                            )}
                    >
                        <Button><FontAwesomeIcon icon={faEllipsisVertical}/></Button>
                    </Tippy>

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