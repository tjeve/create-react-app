class MyContactInfoWithState extends React.Component {
    state = {
        firstName: "",
        lastName:"",
        eMail:"",
        phoneNumber:"",
        address:"",
        city:"",
        state:"",
        zipCode:"",
        people: []
    }
    //handles all changes to the form and updates the state. 
    handleInputChange = (changeEvent) => {
        console.log(changeEvent.target.name, changeEvent.target.value)
        this.setState({
            [changeEvent.target.name]: changeEvent.target.value
        })
    }

    handleFormSubmit = (submitEvent) => {
        submitEvent.preventDefault() //prevents your console logs from immediately disappearing

        const newPeople = [...this.state.people]
        newPeople.push({
            people: newPeople,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            eMail: this.state.eMail,
            phoneNumber:this.state.phoneNumber,
            address:this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode:this.state.zipCode,
        })

        this.setState({
            people: newPeople,
            firstName: "",
            lastName:"",
            eMail:"",
            phoneNumber:"",
            address:"",
            city:"",
            state:"",
            zipCode:""
        })
    }

    render () {
        console.log("People:" + this.state.people)
        return (
            <div className="container">
                <form onSubmit={ this.handleFormSubmit }>
                    <div className="form-group">
                        <input type="text" name="firstName"
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                        value={this.state.firstName}></input>
                        <input type="text" name="lastName" 
                        placeholder="Last Name"
                        onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="eMail"
                        placeholder="Email"
                        onChange={this.handleInputChange}></input>
                        <input type="text" name="phoneNumber"
                        placeholder="Phone"
                        onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type="text" name="address"
                            placeholder="Address"
                            onChange={this.handleInputChange}></input>
                            <input type="text" name="city"
                            placeholder="City"
                            onChange={this.handleInputChange}></input>
                        </div>
                        <div>
                            <input type="text" name="state"
                            placeholder="State"
                            onChange={this.handleInputChange}></input>
                            <input type="text" name="zipcode"
                            placeholder="Zipcode"
                            onChange={this.handleInputChange}></input>
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