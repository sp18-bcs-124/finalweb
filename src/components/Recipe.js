import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{
    
    

 

    render(){
  
        return(
            <div className="container">
                <div className="collection">
                   
                        <li className="collection-item"><b>Bill: {this.props.total} PKR</b></li>
                    </div>
                    <div className="checkout">
                        <button style={{paddingRight:'206px'}} className="waves-effect waves-light btn">Done</button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)