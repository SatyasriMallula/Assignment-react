import React from "react";
class Home extends React.Component{
    
    render(){
        const{message}=this.props
        console.log(message)
        return(
            
            <div>             
                <h1>Home component</h1>
                <h1>{message}</h1>              
            </div>
        )
    }
}
export default Home;