import { useContext, useEffect, useCallback } from 'react';
import './Controller.css'
import { CalcContext } from './Calculator';

const Controller = ()=>{

    const context = useContext(CalcContext)    

    const numberClickHandler = useCallback((param)=>{
        context.dispatch({type:'number', payload:param})    
    },[context])
    
    const zeroClickHandler = useCallback((param)=>{
        context.dispatch({type:'zero', payload:param})   
    },[context])

    const opClickHandler = useCallback((param)=>{
        context.dispatch({type:'operation', payload:param})   
    },[context])

    const equalsClickHandler = useCallback((param)=>{
        context.dispatch({type:'equals'})   
    },[context])

    const commaClickHandler = useCallback(()=>{
        context.dispatch({type:'comma'})  
    },[context])

    const squareRootClickHandler = useCallback(()=>{
        context.dispatch({type:'square-root'})  
    },[context])

    const powerClickHandler = useCallback((n)=>{
        context.dispatch({type:'power', payload:n})
    },[context])

    const acClick = useCallback(()=>{
        context.dispatch({type:'ac'})
    },[context])

    const signalClickHandler = useCallback(()=>{
        context.dispatch({type:'signal'})
    },[context])

    useEffect(() => {
        document.addEventListener('keydown',(event)=>{
            const keyName = event.key;

            switch (keyName){                
                case '0':
                    console.log('case 0')
                    zeroClickHandler(1)
                    break;
                case '+':
                    opClickHandler('plus')
                    break;
                case '-':
                    opClickHandler('minus')
                    break;
                case '*':
                    opClickHandler('times')
                    break;
                case '/':
                    opClickHandler('division')
                    break;
                case 'Enter':
                    equalsClickHandler()
                    break;
                case ',':
                    commaClickHandler()
                    break;                
                case '.':
                    commaClickHandler()
                    break;                
                default:                    
                    if(parseInt(keyName)){                        
                        numberClickHandler(parseInt(keyName))
                    }             
                    return;
            }
        })
      },[commaClickHandler, equalsClickHandler, numberClickHandler, opClickHandler, zeroClickHandler]);

    return <div className='Controller'>
        <button onClick={()=>acClick()}>AC</button>            
        <button onClick={()=>{powerClickHandler(2)}}>x<sup>2</sup></button>
        <button onClick={()=>{powerClickHandler(2)}}>x<sup>3</sup></button>
        <button className="operation" onClick={()=>{opClickHandler('plus')}}>+</button>        
        <button onClick={()=>{signalClickHandler()}}>+/-</button>        
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