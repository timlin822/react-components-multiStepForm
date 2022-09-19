import './StepBar.css';

const StepBar=({step,totalStep})=>{
    return (
        <div className="step-bar">
            <div className="step step-active">
                <div className="step-number">1</div>
                <div className="step-title">填寫基本資料</div>
            </div>
            <div className={step>totalStep-2?"step step-active":"step"}>
                <div className="step-number">2</div>
                <div className="step-title">填寫通訊資料</div>
                <span className="cross-line"></span>
            </div>
            <div className={step>totalStep-1?"step step-active":"step"}>
                <div className="step-number">3</div>
                <div className="step-title">完成</div>
                <span className="cross-line"></span>
            </div>
        </div>
    );
}

export default StepBar;