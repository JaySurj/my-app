export interface Person{
    name :string,
    lastname: string,
    age:number
}

export type PersonEntry = Person & {id: number}

export type ViewState = "home" | "registration" | "overview"

export interface HomeState{
    view : ViewState,
    updateViewState : (view:ViewState)=> (state:HomeState) => HomeState,
    currentPersonId:number
    storage : Map<number,PersonEntry>
    insertPerson: (person:Person)=>(state:HomeState) => HomeState

}

export const initHomeState :HomeState = {
    view : "home",
    updateViewState : (view:ViewState)=> (state:HomeState) : HomeState => ({
        ...state,
        view:view
    }),
    currentPersonId:0,
    storage : new Map(),
    insertPerson:(person:Person)=>(state:HomeState): HomeState =>({
        ...state,
        currentPersonId:state.currentPersonId +1,
        //Here we are creating an entry in the map using the values which were set to the state by the user.
        storage : state.storage.set(state.currentPersonId, {
            id:state.currentPersonId,
            name:person.name,
            lastname:person.lastname,
            age:person.age
        })
    })
}