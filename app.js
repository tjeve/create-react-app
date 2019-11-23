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
        zipCode:"",
        people: []
    }
    
    handleSubmit = (submitEvent) => {
        submitEvent.preventDefault() //prevents your console logs from immediately disappearing
        alert("Contact Information was submitted:" + this.state.people)
        console.log(this.state)
        const newPeople = [...this.state.people]
        newPeople.push({
            people: newPeople
        })
        console.log(this.people)
    }

    render () {

        return (
            <div className="container">
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="text" name="firstName"
                        placeholder="First Name" 
                        value={this.state.firstName}></input>
                        <input type="text" name="lastName" 
                        placeholder="Last Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="eMail"
                        placeholder="Email"></input>
                        <input type="text" name="phone Number"
                        placeholder="Phone"></input>
                    </div>
                    <div className="form-group">
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
                    </div>
                    <input type="submit"></input>
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