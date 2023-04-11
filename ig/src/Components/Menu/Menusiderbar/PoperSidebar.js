import styles from "./Poppersidebar.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)


function Poppersidebar({children}){
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}


export default Poppersidebar