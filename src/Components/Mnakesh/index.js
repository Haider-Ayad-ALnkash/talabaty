import React,{Component} from 'react'
import axios from 'axios'
class Service_Mnukesh extends Component {
    state = {
        menu:[]
    }
    componentDidMount(){
        axios.get('data.json').then(res=>{this.setState({menu:res.data.mnakesh})})
    }
    render() {
        const {menu}=this.state;
        const menuList=menu.map(menu=>{
            return (
                
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
            return(
                <section className="menu">
                    <div className="container">
                        <div className="row text-center">
                        <h2>شوف الاسعار  حار ومكسب ورخيص</h2> 
                        <h2 className="badge bg-danger">مناقيش</h2> 
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
            )
    }
    
}
export default Service_Mnukesh;