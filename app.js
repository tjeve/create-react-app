class MyContactInfoWithState extends React.Component {
    state = {
        firstName: "",
        lastName:"",
        eMail:"",
        phone:"",
        number:"",
        address:"",
        city:"",
        state:"",
        zipCode:""
    }
    
    render () {

        return (
            <div className="container">
                <form>
                    <input type="text" ></input>
                </form>
            </div>
        )
    }
}


const App = () => {
   return (
       <div>
           <h1>Contacts App</h1>
           <MyContactInfoWithState />
       </div>
   )
}

ReactDOM.render(<App/>, document.getElementById('root'))