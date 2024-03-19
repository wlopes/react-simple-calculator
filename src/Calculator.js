import './Calculator.css'
import Screen from './Screen'
import Controller from './Controller'
import { createContext, useReducer } from 'react'

export const CalcContext = createContext()

function solveOperation(state){
    switch (state.operation){
        case 'plus':
            return state.memoValue + state.screenValue
        case 'minus':
            return state.memoValue - state.screenValue
        case 'times':
            return state.memoValue * state.screenValue
        case 'division':
            return state.memoValue / state.screenValue
        case 'percent':
            return state.memoValue * state.screenValue/100
        case 'square-root':
            return Math.sqrt(state.screenValue)
        default:
            return state.screenValue            
    }
}

const reducer = (state, action)=>{      
    switch (action.type){
        case 'number':            
            if(state.comma){
                let postComma = state.postComma+1
                let result = state.screenValue + action.payload * Math.pow(10,-postComma)                
                return {...state, screenValue:parseFloat(result.toFixed(postComma)), postComma:postComma}
            }else{
                return {...state, screenValue:state.screenValue*10 + action.payload};
            }                                                
        case 'zero':        
            if(state.comma){    
                return {...state, postComma: state.postComma+action.payload}
            }else{
                return {...state, screenValue:state.screenValue* Math.pow(10,action.payload)}
            }
        case 'operation':
            if(state.operation){
                //SOLVE OPERATION
                let result = solveOperation(state)
                return {...initialState, memoValue:result, operation: action.payload}
            }else{
                return {...initialState, operation:action.payload, memoValue:state.screenValue}
            }            
        case 'equals':
            if(state.operation){                
                let result = solveOperation(state)
                return {...initialState, memoValue:result, operation: null}
            }else{
                return state
            }
        case 'comma':
            return {...state, comma:true}
        case 'square-root':
            if(state.operation){
                return state
            }else{
                if(state.screenValue === 0){
                    return {...state, operation:'square-root'}
                }else{
                    return {...state, memoValue: Math.sqrt(state.screenValue), screenValue:0}
                }            
            }
            
        default:
            console.log('default')
            return state
    }

    
}

const initialState = {
    screenValue:0,
    memoValue:0,
    operation:null,
    comma:false,
    postComma:0
}

const Calculator = ()=>{
    const [state, dispatch] = useReducer(reducer,initialState)    

    return (
        <CalcContext.Provider value={{state, dispatch}}>
            <div className="Calculator">
                <Screen state={state}></Screen>
                <Controller/>
            </div>
            {JSON.stringify(state)}
        </CalcContext.Provider>
    )
}

export default Calculator