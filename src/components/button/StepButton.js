import './StepButton.css';

const StepButton=({step,totalStep,clickHandler})=>{
    return (
        <>
            {step<totalStep && (<div className="step-button">
                <button className="btn btn-prev" onClick={()=>clickHandler("prev")} disabled={step===1}>返回</button>
                <button className="btn btn-next" onClick={()=>clickHandler("next")}>繼續</button>
            </div>)}
        </>
    );
}

export default StepButton;