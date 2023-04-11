import Button from '../../Button';
import styles from './MenuSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuSidebar({ data = [], onClick, iconSidebar }) {
    const clasname = cx('wrapper', {
        separate: data.separate,
    });
    console.log(data.icon);
    return (
        <Button onClick={onClick} className={clasname} sidebar  iconSidebar={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuSidebar;
