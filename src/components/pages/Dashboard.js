import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buyLaptop, buyMobile, buyTablet, fetchUsers } from '../../redux/actions/index';

export class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                 <h1 className="title"> Hospital DashBoard</h1>
            <div className="items"> 
           
            <div className="item">
                <p>Patients</p>
                <p>Count : {this.props.numberOfLaptops}</p>
                <button onClick={this.props.buyLaptop}>BUY</button>
            </div>
            <div className="item">
                <p>Beds</p>
                <p>Available : {this.props.numberOfMobiles}</p>
                <button onClick={this.props.buyMobile}>BUY</button>
            </div>
            <div className="item">
                <p>Tablets</p>
                <p>Available : {this.props.numberOfTablets}</p>
                <button onClick={this.props.buyTablet}>BUY</button>
            </div>

            <div className="item">
                <p>Get User Data</p>
                <p>Count : {this.props.users}</p>
                <button onClick={this.props.fetchUsers}>Get API</button>
            </div>
            </div> 
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
   
    return{
        numberOfLaptops:state.laptop.numberOfLaptops,
        numberOfMobiles:state.mobile.numberOfMobiles,
        numberOfTablets:state.tablet.numberOfTablets,
        users:state.dataUser.users
        
    }
}
const mapDispatchToState=(dispatch)=>{
    return{
        buyLaptop:()=>dispatch(buyLaptop()),
        buyMobile:()=>dispatch(buyMobile()),
        buyTablet:()=>dispatch(buyTablet()),
        fetchUsers:()=>dispatch(fetchUsers())
    }
}
export default connect(mapStatetoProps, mapDispatchToState)(Dashboard)
