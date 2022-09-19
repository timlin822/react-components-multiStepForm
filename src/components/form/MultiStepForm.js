import {useState} from 'react';

import StepBar from 'components/bar/StepBar';
import UserForm from './UserForm';
import InfoForm from './InfoForm';
import SuccessForm from './SuccessForm';
import StepButton from 'components/button/StepButton';
import Error from 'components/error/Error';

import './MultiStepForm.css';

const MultiStepForm=()=>{
    const totalStep=3;
    const [step,setStep]=useState(1);
    const [error,setError]=useState("");
    const [userData,setUserData]=useState({
		name: "",
		email: "",
        password: "",
		phone: "",
        address: ""
	});
	const {name,email,password,phone,address}=userData;

    const changeHandler=(e)=>{
        setError("");

		setUserData({
			...userData,
            [e.target.name]: e.target.value
        });
    };

    const checkStepOneHandler=()=>{
        const emailPattern=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const passwordPattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        
        //檢查欄位是否填寫
        if(!name || !email || !password){
            return setError("請填寫完整基本資料");
        }
        //檢查Email格式
        else if(!email.match(emailPattern)){
            return setError("Email格式錯誤");
        }
        //檢查電話格式
        else if(!password.match(passwordPattern)){
            return setError("請填寫至少8位字元，包括1個大寫字元、1個小寫字元、1個數字、1個特殊字元");
        }
        else{
            setStep(2);
        }
    };
    const checkStepTwoHandler=()=>{
        const phonePattern=/(\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4}|09\d{2}(\d{6}|-\d{3}-\d{3})/;

        //檢查欄位是否填寫
        if(!phone || !address){
            return setError("請填寫完整通訊資料");
        }
        //檢查電話格式
        else if(!phone.match(phonePattern)){
            return setError("電話格式錯誤");
        }
        else{
            setStep(3);
        }
    };
    const clearAllHandler=()=>{
        setUserData({
            name: "",
            email: "",
            password: "",
            phone: "",
            address: ""
        });
    };

    const clickHandler=(type)=>{
        setError("");
        if(type==="prev"){
            if(step===1){
                setStep(1);
            }
            else if(step===2){
                setStep(1);
            }
        }
        else if(type==="next"){
            if(step===1){
                checkStepOneHandler();
            }
            else if(step===2){
                checkStepTwoHandler();
            }
        }
        else if(type==="home"){
            clearAllHandler();
            setStep(1);
        }
    };

    return (
        <div className="multi-step-form">
            <StepBar step={step} totalStep={totalStep} />
            <div className="forms">
                {error && <Error error={error} setError={setError} />}
                {step===1 && <UserForm userData={userData} changeHandler={changeHandler} />}
                {step===2 && <InfoForm userData={userData} changeHandler={changeHandler} />}
                {step===3 && <SuccessForm clickHandler={clickHandler} />}
            </div>
            <StepButton step={step} totalStep={totalStep} clickHandler={clickHandler} />
        </div>
    );
}

export default MultiStepForm;