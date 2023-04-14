import { useState } from 'react';
import MenuSidebar from '../../Menu/Menusiderbar/MenuSidebar';
import Poppersidebar from '../../Menu/Menusiderbar/PoperSidebar';
import { History, IconHome, IconShort, IconSubscriptions, Libary } from '../../Icon';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

function Sidebar() {
    const [listSidebar, setListSidebar] = useState([]);

    const MenuDefault = [
        [
            {
                icon: <IconHome/>,
                title: 'Trang chủ',
                to:'/'
                
            },
            {
                icon : <IconShort/>,
                title : "Short",
                to :'/short'
            },
            {
                icon : <IconSubscriptions/>,
                title : "Subscriptions",
                to:'/subscriptions',
            },
        ],
        [
            {
                icon : <Libary/>,
                title : "Libary",
                to:'/libary'
            },
            {
                icon : <History/>,
                title : "History",
                to:'/libary'
            },
        ]
        
    ];
    return (
            <div className={cx('sidebar')}>
                <Poppersidebar>
                
                {
                    
                    MenuDefault[0].map((list , index)=>{
                        return (
                            <MenuSidebar data={list}  key={index} iconSidebar />
                        )
                    })
                }
                </Poppersidebar>
                <Poppersidebar>
                
                {
                    
                    MenuDefault[1].map((list , index)=>{
                        return (
                            <MenuSidebar data={list}  key={index} iconSidebar />
                        )
                    })
                }
                </Poppersidebar>
            </div>
    );
}

export default Sidebar;
