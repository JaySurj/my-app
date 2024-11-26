import React from "react"
import { PersonEntry } from "./home.state 3"

export interface OverviewProps{
    backToHome: () => void
    //storage: Map<number, PersonEntry>

}

export const Overview = (props:OverviewProps) : JSX.Element =>(
    <div>
        <div>
            Overview of the Registration
        </div>
        <div>
            <button
                onClick={_ => props.backToHome()}>
                Back
            </button>
        </div>

    </div>
)