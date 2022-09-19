import {FaCheck} from 'react-icons/fa';

import './MultiStepForm.css';

const SuccessForm=({clickHandler})=>{
    return (
        <>
            <div className="success-check"><FaCheck /></div>
            <h1 className="success-title">謝謝光臨</h1>
            <div className="btn-home" onClick={()=>clickHandler("home")}>回首頁</div>
        </>
    );
}

export default SuccessForm;