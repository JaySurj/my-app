import React from "react";
import { HomeState, initHomeState, Person } from "./home.state 3";
import { RegistrationForm } from "./registration 5";
import { Overview } from "./overview";

export class Home extends React.Component<{},HomeState> {
    constructor(props : {}){
        super(props)
        this.state = initHomeState
    }

    render(): JSX.Element {
        switch (this.state.view) {
            case "home":
                return(
                    <div> Welcome to our Home Page 
                        <button
                            onClick={e=> this.setState(this.state.updateViewState("registration"))}
                            >
                            Register
                        </button>
                        <button
                            onClick={e=> this.setState(this.state.updateViewState("overview"))}>
                            Overview
                        </button>
                    </div>
                )
                break;
        
            case "registration": 
                return (<RegistrationForm
                    backToHome={() => this.setState((this.state.updateViewState("home")))}
                    insertPerson={(person :Person) => this.setState(this.state.insertPerson(person))}
                    
                    />
                )
                break
            
            case "overview": 
                return (
                   <Overview
                   backToHome={() => this.setState((this.state.updateViewState("home")))}
                   />
                )

            default:
                return (
                    <div>
                        Something went wrong!
                    </div>
                )
                break;
        }
    }
}