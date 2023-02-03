import React from 'react';
import Home from './Home';
class App extends React.Component{
  constructor(){
    super()
      console.log("iam a constructor")
      this.state={
        userdata:[]
      }
  }
  componentDidMount(){
  console.log("iam a component did mount")
    //  axios.get('https://dummyjson.com/products')
    //   .then(res=>console.log(res.data))
    //  .catch(arr=>console.log(arr))
      }
     render(){
      console.log("iam a render")
      return(
     <Home message="hi iam a child component"/>
      )
     } 
}
export default App;
