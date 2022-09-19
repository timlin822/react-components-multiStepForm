import './MultiStepForm.css';

const UserForm=({userData,changeHandler})=>{
    return (
        <div className="form">
            <div className="input-group">
                <label htmlFor="name">姓名:</label>
                <input type="text" className="input" id="name" name="name" placeholder="請輸入姓名" autoComplete="off" value={userData.name} onChange={changeHandler} />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input type="text" className="input" id="email" name="email" placeholder="請輸入Email" autoComplete="off" value={userData.email} onChange={changeHandler} />
            </div>
            <div className="input-group">
                <label htmlFor="password">密碼:</label>
                <input type="password" className="input" id="password" name="password" placeholder="請輸入密碼" autoComplete="off" value={userData.password} onChange={changeHandler} />
            </div>
        </div>
    );
}

export default UserForm;