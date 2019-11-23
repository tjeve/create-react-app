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
                    <div>
                        <input type="text" name="firstName"
                        placeholder="First Name"></input>
                        <input type="text" name="lastName" 
                        placeholder="Last Name"></input>
                    </div>
                    <div>
                        <input type="text" name="eMail"
                        placeholder="Email"></input>
                        <input type="text" name="phone Number"
                        placeholder="Phone"></input>
                    </div>
                    <div>
                        <input type="text" name="address"
                        placeholder="Address"></input>
                        <input type="text" name="city"
                        placeholder="City"></input>
                    </div>
                    <div>
                        <input type="text" name="state"
                        placeholder="State"></input>
                        <input type="text" name="zipcode"
                        placeholder="Zipcode"></input>
                    </div>
                    <button><input type="submit"></input></button>
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