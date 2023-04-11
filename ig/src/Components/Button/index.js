import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import IconHome from '../Icon';

const cx = classNames.bind(styles);

function Button({
    children,
    signin = false,
    sidebar = false,
    menu = false,
    onClick,
    leftIcon,
    className,
    iconSidebar,
    to,
    href,
    ...passProps
}) {
    console.log(leftIcon);
    const Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const clasname = cx('wrapper', {
        [className]: className,
        signin,
        menu,
        sidebar,
        iconSidebar,
    });

    return (
        <Comp className={clasname} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {iconSidebar && (
                <div className={cx('wr-icon')}>
                    <span className={cx('iconsb')}>{iconSidebar}</span>
                </div>
            )}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
