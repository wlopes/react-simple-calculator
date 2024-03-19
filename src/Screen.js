import './Screen.css'

const Screen = ({state})=>{
    return <div className="Screen">
        <span>{state.screenValue ? state.screenValue.toFixed(state.postComma) : state.memoValue}</span>
    </div>
}

export default Screen;