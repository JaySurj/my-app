import { Person} from "./home.state 3"


export type RegistrationState = Person & {
    // currentPersonId:number
    // storage : Map<number,PersonEntry>
    updateName : (name:string)=> (state:RegistrationState) => RegistrationState
    updateLastName : (name:string)=> (state:RegistrationState) => RegistrationState
    updateAge : (name:number)=> (state:RegistrationState) => RegistrationState
    //insertPerson: (state:RegistrationState) => RegistrationState
}

export const initRegState : RegistrationState = {
    name:"Enter your name",
    lastname:"Enter last your name",
    age : 0,
    // currentPersonId:0,
    // storage : new Map(),
    updateName : (name:string)=> (state:RegistrationState): RegistrationState =>({
        ...state,
        name:name
    }),
    updateLastName : (name:string)=> (state:RegistrationState): RegistrationState =>({
        ...state,
        lastname:name
    }),
    updateAge : (age:number)=> (state:RegistrationState): RegistrationState =>({
        ...state,
        age:age
    }),
    // insertPerson: (state:RegistrationState) : RegistrationState =>({
    //     ...state,
    //     currentPersonId:state.currentPersonId +1,
    //     //Here we are creating an entry in the map using the values which were set to the state by the user.
    //     storage : state.storage.set(state.currentPersonId, {
    //         id:state.currentPersonId,
    //         name:state.name,
    //         lastname:state.lastname,
    //         age:state.age
    //     })
    // })
}