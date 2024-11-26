import React from "react"
import { initRegState, RegistrationState } from "./registration.state 5"
import { Person } from "./home.state 3"


export interface RegistrationProps
{
    backToHome : () => void
    insertPerson :(person :Person) => void
}

export class RegistrationForm extends React.Component<RegistrationProps,RegistrationState> {
    constructor(props:RegistrationProps){
        super(props)
        this.state = initRegState
    }

    render() :JSX.Element{
        return(
            <div>
                 <div> Welcome to our Registration Page </div>


                 <div>
                    Name:
                    <input
                        value={this.state.name}
                        onChange={e=> this.setState(this.state.updateName(e.currentTarget.value))}
                        //SetState is built-in in the react component.
                        //e.currentTargert.value => is representing the value entered by the user.
                        //onchange is the event handler
                        >
                    </input>
                 </div>
                 <div>
                    Last Name:
                    <input
                        value={this.state.lastname}
                        onChange={e=> this.setState(this.state.updateLastName(e.currentTarget.value))}
                        >
                    </input>
                 </div>
                 <div>
                    Age:
                    <input
                        value={this.state.age}
                        type="number"
                        onChange={e=> this.setState(this.state.updateAge(e.currentTarget.valueAsNumber))}
                        >
                    </input>
                 </div>
                 <div>
                    <button
                        onClick={_ => this.setState(this.props.insertPerson)}
                    >
                        Submit
                    </button>

                    <button
                        onClick={_ => this.setState(this.props.backToHome)}
                    >
                        Back
                    </button>
                 </div>
            </div>
        )
    }
}