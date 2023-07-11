import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
    const [menus,setMenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenu(data))
    },[])
    return (
        <div>
            <h3>Menu ...........</h3>
             <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center'>
             {
                menus.map((menu,i)=><MenuCard
                key={menu.i}
                menu={menu}
                ></MenuCard>)
             }
             </div>
        </div>
    );
};

export default Menu;