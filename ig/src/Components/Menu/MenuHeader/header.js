import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);


function Header ({title , onBack}) {
    return(
        <div className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </div>
    )
}

export default Header