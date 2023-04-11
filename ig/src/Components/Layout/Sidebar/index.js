import { useState } from 'react';
import MenuSidebar from '../../Menu/Menusiderbar/MenuSidebar';
import Poppersidebar from '../../Menu/Menusiderbar/PoperSidebar';
import { IconHome, IconShort, IconSubscriptions } from '../../Icon';

function Sidebar() {
    const [listSidebar, setListSidebar] = useState([]);

    const MenuDefault = [
        {
            icon: <IconHome/>,
            title: 'Trang chủ',
        },
        {
            icon : <IconShort/>,
            title : "Short"
        },
        {
            icon : <IconSubscriptions/>,
            title : "Subscriptions"
        }
    ];
    return (
            <Poppersidebar>
                
                {
                    
                    MenuDefault.map((list , index)=>{
                        return (
                            <MenuSidebar data={list} key={index} iconSidebar />
                        )
                    })
                }
            </Poppersidebar>
    );
}

export default Sidebar;
