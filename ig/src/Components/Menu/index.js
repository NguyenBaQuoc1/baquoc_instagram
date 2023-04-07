import Button from "../Button";
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuIteam({data=[], }){
    const clasname = cx('wrapper' , {
        separate : data.separate
    })
    return (
        <Button className={clasname} menu leftIcon={data.icon} >{data.title}</Button>
    )
}

export default MenuIteam