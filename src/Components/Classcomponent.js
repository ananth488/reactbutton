import React from "react";
 
export default class Subcribe extends React.Component {

    constructor() {
        
        super();
        this.state = { count: 40, name: "are't Eligible", value: "Subcribe" }

        const {count,name,value}=this.state
        // this.incress=this.setCount.bind(this)
      console.log(count,name,value)
        this.state = {count: 0 }
        this.plus = this.setChange.bind(this)
        this.minus = this.setChanges.bind(this)
    }

    setChange() {
        this.setState({ count: this.state.count + 1})
        if(this.state.count >19)
        {
            this.setState({count:20})
            alert("You have reached 20")
        } 

    }

    setChanges() {
        this.setState({ count: this.state.count - 1 })
        if (this.state.count === 0) {
            this.setState({ count: this.state.count })
            alert("Does't work in neagtive value")
        }
    }

    setCount() {

        // this.setState({count:this.state.count+1,name: this.state.name, value: this.state.value})

        // (this.state.count>=12 ? (this.setState({ name: "Eligible", value: "Subcribed"})): (this.setState({name: "are't Eligible", value: "Subcribe"})))

        // console.log(this.state.count,"pre")
        // {this.state.count>=49 ? this.setState({name: "Eligible"}):this.setState({name: "Not Eligible"})}

        // if(this.state.count>=49)
        // {
        //     this.setState({name: "Eligible"})
        // }     
    }
     componentDidUpdate(){  
        console.log("update");
     }
    render() {
        console.log("this is render");
        return (

            <>
                {/* <h1>You are {this.state.name} for Silver Play Button</h1>
                <span><button onClick={this.incress} className="but" type="button">{this.state.value}</button>{this.state.count+"k"} </span> */}

                 
               <div className="counte">
                    <span><h1>Counter</h1></span>
                    <span><h2>{this.state.count}</h2></span>
               

                <div className="Counter">

                    <span><button onClick={this.plus}>Plus</button><button onClick={this.minus}>Minus</button></span>
                </div>
                </div>
            </>

        )


    }
}