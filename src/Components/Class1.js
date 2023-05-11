import React from "react";

export default class Classcom extends React.Component{

    constructor(){
        super();
        this.state=({value:"green",font:"center"})

        console.log("Constructor")
    }
    
    componentDidMount(){

        setTimeout(()=>{
            this.setState({value:"yellow"})
         },1000)

         console.log("Component did mount")
    }

    componentDidUpdate(){
      console.log("update")
    } 

    componentWillUnmount(){
        console.log("WillUnmount")
    }
    render(){
    console.log("render")

        return(
            <>
            <h1 
            style={{
                fontSize:"40px",
                backgroundColor:this.state.value,
                textAlign:this.state.font
                
            }}
            >Nitheesh</h1>
            </>
        )
    }

   
}