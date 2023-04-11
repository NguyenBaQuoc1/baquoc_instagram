import Button from '../../Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItems({ data = [], onClick, iconSidebar }) {
    const clasname = cx('wrapper', {
        separate: data.separate,
    });
    console.log(data.icon);
    return (
        <Button onClick={onClick} className={clasname} menu leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
