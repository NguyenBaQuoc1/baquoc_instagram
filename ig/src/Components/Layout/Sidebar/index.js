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
            to:'/subscriptions'
        }
    ];
    return (
            <Poppersidebar>
                
                {
                    
                    MenuDefault.map((list , index)=>{
                        return (
                            <MenuSidebar data={list}  key={index} iconSidebar />
                        )
                    })
                }
            </Poppersidebar>
    );
}

export default Sidebar;
