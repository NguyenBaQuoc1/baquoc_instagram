import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

///
import MenuItems from './MenuItems';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Poper from '../Popper/index'
import Header from './header';

const cx = classNames.bind(styles);

function Menu({ items, children }) {
    const [listMenu, setListMenu] = useState([{ data: items }]);
    const data = listMenu[listMenu.length - 1];
    console.log(listMenu);

    const renderListMenu = () => {
        return data.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItems
                data={item} key={index}
                onClick={()=>{
                    if(isParent){
                        setListMenu((prev)=>[...prev , item.children])
                    }
                }}
                ></MenuItems>;
        });
    };

    const handleReset =()=>{
        setListMenu((prev)=>prev.slice(0,1))
    }

    const handelBack = () => {
        setListMenu((prev) => prev.slice(0, prev.length - 1));
    }
    const renderRerult = (attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
            <Poper>
                {listMenu.length > 1 && <Header title={data.title} onBack={handelBack}/>}
                {renderListMenu()}
            </Poper>
        </div>
    );


    return (
        <Tippy
        interactive
        delay={[0, 700]}
        offset={[12, 8]}
        // hideOnClick={hideOnClick}
        placement="bottom-end"
        render={renderRerult}
        onHide={handleReset}
    >
        {children}
    </Tippy>
    );
}

export default Menu;
