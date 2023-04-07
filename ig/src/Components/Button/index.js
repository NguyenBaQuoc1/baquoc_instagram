import styles from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Button({
    children,
    signin = false,
    onClick,
    leftIcon,
    className,
    menu,
    ...passProps
}) {
    const Comp = "button";
    const props = {
        onClick,
        ...passProps,
    };
    const clasname = cx("wrapper", {
        [className]:className,
        signin,
        menu,
    });

    return (
        <Comp className={clasname} {...props}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
        </Comp>
    );
}

export default Button;
