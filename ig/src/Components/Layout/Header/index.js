import Logo from '../../Icon/logo';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import {
    faBars,
    faBell,
    faCircleUser,
    faEllipsisVertical,
    faGlobe,
    faKeyboard,
    faL,
    faLanguage,
    faMicrophone,
    faMoon,
    faSearch,
    faUpload,
    faUser,
    faUserShield,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../Button';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import React, { useState } from 'react';
import MenuItems from '../../Menu/MenuHeader/MenuItems';
import Menu from '../../Menu/MenuHeader/Menu'

const cx = classNames.bind(styles);

function Header() {
    const [showResult, setShowResult] = useState(false);

    const dataMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserShield} />,
            title: 'Your data in YouTube',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Appearance: Device theme',
        },
        {
            icon: <FontAwesomeIcon icon={faLanguage} />,
            title: 'Language:English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faGlobe} />,
            title: 'Location: Vietnam',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
            separate: true,
        },
    ];

    const menuUser = [
        {
            icon: <FontAwesomeIcon icon={faCircleUser} />,
            title: 'Kênh của bạn',
        },
    ];

    const handleHideResult = () => {
        setShowResult(false);
    };

    const curentUser = false;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('start')}>
                    <button className={cx('btn-start')}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                    <div className={cx('logo')}>
                        <Logo className={cx('icon-logo')} />
                    </div>
                </div>

                <div className={cx('search')}>
                    <div className={cx('icon-search')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <input placeholder="Search" className={cx('input-search')} />
                    <div className={cx('microphone')}>
                        <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                </div>

                <div className={cx('action')}>
                    <Menu items={dataMenu}>
                        {curentUser ? (
                            <>
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                                            Tạo
                                        </div>
                                    )}
                                >
                                    <button className={cx('btn-action')}>
                                        <FontAwesomeIcon icon={faUpload} />
                                    </button>
                                </Tippy>
                                <Tippy
                                    interactive
                                    render={(attrs) => (
                                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                                            Thông Báo
                                        </div>
                                    )}
                                >
                                    <button className={cx('btn-action')}>
                                        <FontAwesomeIcon icon={faBell} />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <button
                                className={cx('icon-menu')}
                                onClick={() => {
                                    setShowResult(true);
                                }}
                            >
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>

                    {curentUser ? (
                        <Menu items={menuUser}>
                            <div className={cx('img')}>
                                <img
                                    className={cx('img-user')}
                                    src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/323716306_512119277578466_2813904664514324895_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=q1f9-Anklm8AX9L7l4I&_nc_ht=scontent.fhan5-11.fna&oh=00_AfDRV9CuuNvxKywPthuOvoF802D1Q-a6meuADlo5k0ZJdw&oe=643711AD"
                                ></img>
                            </div>
                        </Menu>
                    ) : (
                        <Button signin>
                            <span className={cx('icon')}>
                                <FontAwesomeIcon icon={faUser} />
                            </span>
                            Sign In
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
