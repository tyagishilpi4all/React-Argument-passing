import React ,{Component} from 'react';
import MyEvent from '../component/myEvent';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.demo = this.demo.bind(this);
    // }
    state={
        name:"shilpi Tyagi",
        id:"101"
    }

    // demo(){
    //     console.log("simple demo clicked...",this);
    // }

    demo=(id,e)=>{
        console.log("button clicked..." ,this);
        console.log("id is:::",id);
        console.log("event obj is:::",e);
    }

    // shilpi=(e)=>{
    //    this.demo(this.state.id,e);
    // }
    render(){
        return(
            <React.Fragment>
                <h1>My Name is {this.state.name}</h1>
                <button className="btn btn-info " onClick={e=>this.demo(this.state.id,e)}>Click Me</button>
                <MyEvent />
            </React.Fragment>
        )
    }
};
export default App;