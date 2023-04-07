import styles from './Button.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Button({children , signin}) {
    const Comp = 'button'


    const clasname = cx('wrapper' , {
        signin
    })

    return (
        <Comp className={clasname} >
            <span className={cx('title')}>{children}</span>
        </Comp>
    )
}

export default Button