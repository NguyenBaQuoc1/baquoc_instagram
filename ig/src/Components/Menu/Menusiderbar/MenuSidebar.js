import Button from '../../Button';
import styles from './MenuSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuSidebar({ data = [] , onClick, iconSidebar }) {
    const clasname = cx('wrapper', {
        separate: data.separate,
    });
    console.log(data.to);
    return (
        <Button className={clasname} to={data.to} sidebar  iconSidebar={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuSidebar;
