import Logo from '../../Icon/logo'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo className={cx('icon-logo')}/>
                </div>

                <div className={cx('search')}>
                    <input />
                </div>

                <div className={cx('action')}>
                    
                </div>
            </div>
        </div> 
    )
}

export default Header