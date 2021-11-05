import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Service extends Component {
    state = {
        services:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then(res=>{this.setState({services:res.data.service})})
    }
    render() {
        const {services}=this.state;
        const serviceList=services.map(service=>{
            return (
               
                <div key={service.id} className="col-sm-6 col-md-4 ">
                        <div className="card">
                    <Link to={service.link}>
                            <img src={service.image} className="card-img-top" alt="..."/>
                    </Link>
                            <div className="card-body">
                            <h3 className="card-text">{service.body}</h3>
                            </div>
                        </div>
                </div>
            )
        })
            return(
                <section className="services py-4">
                    <div className="container">
                        <div className="row text-center">
                            {serviceList}
                            <div className="py-2">

                            </div>
                            <div className="col-sm-6 col-md-4 card">
                                <img src="../Images/humbrger.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">سندويش</h5>
                                    <h4 className="card-text">طعم الهمبركر عدنا عالم ثاني  مذاق شي خيالي شنو منتظر أطلب هسة </h4>
                                </div>
                                <ul className="list-group list-group-flush ">
                                    <h3 className="list-group-item">  بركر عراقي <span className="bg-primary text-white" >IQ 3000</span></h3>
                                    <h3 className="list-group-item">  بركر لحم دبل <span className="bg-primary text-white" >IQ 4000</span></h3>
                                    <h3 className="list-group-item">  بركر لحم لاجبن <span className="bg-primary text-white" >IQ 3500</span></h3>
                                    <h3 className="list-group-item">  بركر دجاج <span className="bg-primary text-white" >IQ 2500</span></h3>
                                    <h3 className="list-group-item">  سكالوب دجاج <span className="bg-primary text-white" >IQ 2500</span></h3>
                                    <h3 className="list-group-item">  سكالوب دجاج بالجبن <span className="bg-primary text-white" >IQ 3500</span></h3>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 card">
                                <img src="../Images/sach.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h2 className="card-title">صاج</h2>
                                    <h4 className="card-text">طعم الصاج عدنا يوديك ياخذك سفرة باجواء لبنان شنو منتظر <span>أطلب هسة</span> </h4>
                                </div>
                                <ul className="list-group list-group-flush ">
                                    <h3 className="list-group-item">  صاج دجاج <span className="bg-primary text-white" >IQ 2000</span></h3>
                                    <h3 className="list-group-item">  صاج  فاهيتا لحم <span className="bg-primary text-white" >IQ 2000</span></h3>
                                    <h3 className="list-group-item"> صاج  فاهيتا دجاج<span className="bg-primary text-white" >IQ 2000</span></h3>
                                    <h3 className="list-group-item">  صاج فلافل <span className="bg-primary text-white" >IQ 1000</span></h3>
                                    <h3 className="list-group-item">  صاج بركر لحم <span className="bg-primary text-white" >IQ 3000</span></h3>
                                    <h3 className="list-group-item">  صاج بركر دجاج  <span className="bg-primary text-white" >IQ 2500</span></h3>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4 card">
                                <img src="/Images/mkabalat.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">المقبلات</h5>
                                    <h4 className="card-text">طعم المقبلات عدنا جناااااااان شي خيالي شنو منتظر   <span>أطلب هسة</span></h4> 
                                </div>
                                <ul className="list-group list-group-flush ">
                                <h3 className="list-group-item">  مقبلات صغير <span className="bg-primary text-white" >IQ 2000</span></h3>
                                    <h3 className="list-group-item">  مقبلات وسط  <span className="bg-primary text-white" >IQ 3000</span></h3>
                                    <h3 className="list-group-item"> مقبلات كبير<span className="bg-primary text-white" >IQ 4000</span></h3>
                                    <h3 className="list-group-item">  مقبلات عائلي  <span className="bg-primary text-white" >IQ 5000</span></h3>
                                    <h3 className="list-group-item"> مشروبات غازية <span className="bg-primary text-white" >IQ 500</span></h3>
                                    <h3 className="list-group-item"> ماء  <span className="bg-primary text-white" >IQ 250</span></h3>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
    
}
export default Service;