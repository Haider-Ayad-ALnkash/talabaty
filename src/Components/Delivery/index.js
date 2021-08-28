import React from 'react'
import imaDelivery from '../Delivery/Delivery.svg'
const Delivery=()=> {
    return (
        <section className="delevery text-center">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6  display-6">
                        <div className="card">
                            <div className="card-header">
                                خدمة التوصيل المجاني
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item">0782 755 1909</li>
                              <li className="list-group-item">0772 266 1909</li>
                            </ul>
                          </div>
                    </div>
                    <div className="col-sm-6 py-2">
                        <img className="img-fluid" src={imaDelivery} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Delivery;