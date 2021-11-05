import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Service_lzania() {
    const [menus,setMenus]=useState([])
    useEffect(()=>{
        axios.get('js/data.json').then(res=>{setMenus(res.data.lzania) })
    },[])
    const menuList=menus.map((menu)=>{
        return(
            <tbody key={menu.id} >
            <tr>
                <td>{menu.name}</td>
                <td>{menu.small}</td>
                <td>{menu.midum}</td>
                <td>{menu.larg}</td>
            </tr>
        </tbody>
        )
    })
    return (
        <div>
             <section className="menu">
                    <div className="container">
                        <div className="row text-center">
                        <h2>شوف الاسعار  حار ومكسب ورخيص</h2> 
                        <h2 className="badge bg-danger">لزانيا</h2> 
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>اسم الوجبة</th>
                                <th>صغير</th>
                                <th>وسط</th>
                                <th>عائلي</th>
                            </tr>
                            </thead>
                            {menuList}
                        </table>
                        </div>
                    </div>
                </section>
        </div>
    )
}