import './MultiStepForm.css';

const InfoForm=({userData,changeHandler})=>{
    return (
        <div className="form">
            <div className="input-group">
                <label htmlFor="phone">電話:</label>
                <input type="text" className="input" id="phone" name="phone" placeholder="請輸入電話" autoComplete="off" value={userData.phone} onChange={changeHandler} />
            </div>
            <div className="input-group">
                <label htmlFor="address">地址:</label>
                <input type="text" className="input" id="address" name="address" placeholder="請輸入地址" autoComplete="off" value={userData.address} onChange={changeHandler} />
            </div>
        </div>
    );
}

export default InfoForm;