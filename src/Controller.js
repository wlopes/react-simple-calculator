import { useContext } from 'react';
import './Controller.css'
import { CalcContext } from './Calculator';

const Controller = ()=>{

    const context = useContext(CalcContext)    

    const numberClickHandler = (param)=>{
        context.dispatch({type:'number', payload:param})    
    }
    
    const zeroClickHandler = (param)=>{
        context.dispatch({type:'zero', payload:param})   
    }

    const opClickHandler = (param)=>{
        context.dispatch({type:'operation', payload:param})   
    }

    const equalsClickHandler = (param)=>{
        context.dispatch({type:'equals'})   
    }

    const commaClickHandler = ()=>{
        context.dispatch({type:'comma'})  
    }

    const squareRootClickHandler = ()=>{
        context.dispatch({type:'square-root'})  
    }

    return <div className='Controller'>
        <button>?</button>
        <button>?</button>
        <button>?</button>
        <button className="operation" onClick={()=>{opClickHandler('plus')}}>+</button>        
        <button>?</button>
        <button onClick={squareRootClickHandler}>&#x0221A;</button>
        <button onClick={()=>{opClickHandler('percent')}}>%</button>
        <button className="operation" onClick={()=>{opClickHandler('minus')}}>-</button>
        <button onClick={()=>{numberClickHandler(7)}}>7</button>
        <button onClick={()=>{numberClickHandler(8)}}>8</button>
        <button onClick={()=>{numberClickHandler(9)}}>9</button>
        <button className="operation" onClick={()=>{opClickHandler('times')}}>x</button>
        <button onClick={()=>{numberClickHandler(4)}}>4</button>
        <button onClick={()=>{numberClickHandler(5)}}>5</button>
        <button onClick={()=>{numberClickHandler(6)}}>6</button>
        <button className="operation" onClick={()=>{opClickHandler('division')}}>/</button>
        <button onClick={()=>{numberClickHandler(1)}}>1</button>
        <button onClick={()=>{numberClickHandler(2)}}>2</button>
        <button onClick={()=>{numberClickHandler(3)}}>3</button>
        <button className='equal' onClick={()=>{equalsClickHandler()}}>=</button>
        <button onClick={()=>{zeroClickHandler(1)}}>0</button>
        <button onClick={()=>{zeroClickHandler(2)}}>00</button>
        <button onClick={()=>{commaClickHandler()}}>,</button>        
    </div>
}

export default Controller;