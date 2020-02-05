import {Action, Reducer, Dispatch} from "redux"

export interface InitialState {
    currentSection: number
}

export const initialState: InitialState = {
    currentSection: 0
}

export interface DispatchAction extends Action {
    payload: Partial<InitialState>;
}

export enum ActionType {
    ChangeSection
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ChangeSection: {
            return {...state,
                currentSection: action.payload.currentSection ? action.payload.currentSection : 0}
        }
        default: return state
    }
}

export class RootDispatcher {
    private readonly dispatch: Dispatch<DispatchAction>

    constructor(dispatch: Dispatch<DispatchAction>){
        this.dispatch = dispatch;
    }

    changeSection = (currentSection: number) => this.dispatch({type: ActionType.ChangeSection, payload: {currentSection}})
}