import {useState} from 'react'
import {atomState} from '../Atoms/Atom.js'
import {useRecoilState} from 'recoil'
import './Register.css'


export default function Register() {

    const [ create, setCreate] = useRecoilState(atomState)
    const [ userInput, setUserInput ] = useState(' ')
    const [ emailInput, setEmailInput]  = useState(' ')
    const [ passwordInput, setPasswordInput ] = useState(' ')
    const [emailAlert , setEmailAlert] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')
    const [storageAlert , setStorageAlert] = useState('')
    const [ userInputAlert, setUserInputAlert] = useState('')

    

    function AddToRecoil(e) {
        e.preventDefault()
        for(let i=0; i<create.length ; i++){
            if(create[i].Email === emailInput){
                return setStorageAlert('Email is already registered please log-in')
            }else {
                const Add = {
                    User : userInput,
                    Email : emailInput,
                    Password : passwordInput,
                }
                setCreate([...create, Add ])
                
             }
            // function emailValidation() {
            //     const regExpression = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
                    
           
            //    if(  (!regExpression.test((emailInput)))    ){
            //        return setEmailAlert('Please Enter Valid Email')
                  
            //    }
            //       //return setEmailAlert('Log-inned Successfully')
           
            //    }
            //    emailValidation()
               
            //    function passwordValidation() {
            //     const passwordRegExpression = /^(?=(.[a-z]))(?=(.[A-Z]))(?=(.[0-9]))(?=(.[!@#$%^&*()\-__+.])).{8,}$/ 
        
            //     if(passwordRegExpression.test((passwordInput))){
            //         return setPasswordAlert('Please Enter a Valid Password')
            //     }else{
            //         //return setPasswordAlert('Successful')
            //     }
            // }
            // passwordValidation()
        
            // function userValidation() {
            //     const userRegExpression = /[a-z]+\d/g
            //     if(!userRegExpression.test((userInput))){
            //         return setUserInputAlert('Please Enter Valid User Name')
            //     }else{
            //         //return setPasswordAlert('Successful')
            //     }
        
            // } userValidation()

            }
           
        }
        


    function captureUserInput(e) { 
        setUserInput(e.target.value)
    const userRegExpression = /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/
    if(userRegExpression.test(userInput)){
        setUserInputAlert(true)
    }else if(!userRegExpression.test(userInput) && userInput !==''){
        setUserInputAlert('Please Enter Valid Name ')
    }else{
        setUserInputAlert('')
    }}


    function captureEmailInput(e) {
        setEmailInput(e.target.value)
        const emailRegExpression =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(emailRegExpression.test(emailInput)) {
            setEmailAlert(true)
        }else if(!emailRegExpression.test(emailInput) && emailInput!=='') {
            setEmailAlert('Enter Valid Email')
        }else{
            setEmailAlert('')
        }   
    }
    
    function capturePasswordInput(e) {
        setPasswordInput(e.target.value)
        const passwordRegExpression = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?!.\s).{6,20}$/
        if(passwordRegExpression.test(passwordInput)){
            setPasswordAlert(true)
        }else if(!passwordRegExpression.test(passwordInput)){
            setPasswordAlert('Enter Valid Password')
        }else {
            setPasswordAlert('')
        }
        setEmailInput('')
        setUserInput('')
        setPasswordInput('')
    }
    

    return (
        <div>
            <form className='formTag'>
            <h1 className='headingPage'> Iam Register Page</h1>
             <input className='inputBox1' style={{border: (userInputAlert === true) ? 'none' : '2px solid red'}} type='text' placeholder="User Name" onChange={captureUserInput}  />
             <input className='inputBox2' type='email'  style={{border: (emailAlert === true) ? 'none' : '2px solid red'}}    placeholder="Enter Email" onChange={captureEmailInput}  />
             <input className='inputBox3' type= 'password' style={{border: (passwordAlert === true) ? 'none' : '2px solid red'}} placeholder=" Enter Password" onChange={capturePasswordInput}/>
            <button className='submitButton' onClick={AddToRecoil}> Register </button>
            <p>{emailAlert} {passwordAlert} {storageAlert} {userInputAlert} </p>
            {console.log(create)}
            </form>
        </div>
    )
}
