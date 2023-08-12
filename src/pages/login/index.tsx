import { FormEvent, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import DefaultHeader from "../../components/Header"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { IoIosArrowBack } from 'react-icons/io'
import { Container, BtnContainer } from './styled'



interface Form{
    email:string
    password:string
}


const Login = ():JSX.Element=>{
    const navigate = useNavigate()
    const [form, setForm] = useState<Form>({
        email:'visitante@email.com',
        password:'123456'
    })


    useEffect(()=>{
        const token = localStorage.getItem('id')

        if(token){
            navigate('/loja_de_servicos')
        }

        document.title = 'Login'
    }, [])


    const onChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }


    const login = (e:FormEvent<HTMLFormElement>):void=>{
        e.preventDefault()

        const body = {
            email: form.email,
            password: form.password
        }

        axios.post(`${BASE_URL}/login`, body).then(res=>{
            localStorage.setItem('id', res.data)
            navigate('/loja_de_servicos')
        })
    }


    const limpar = ()=>{
        setForm({
            email:'',
            password:''
        })
    }



    return(
        <>
        <DefaultHeader leftIcon={<IoIosArrowBack className='icon' onClick={()=> navigate('/loja_de_servicos')}/>}
            title='Login' rightIcon={<div/>}/>
        <Container>
            <form onSubmit={login}>
                <fieldset>
                    <input 
                        type='text' name='email' value={form.email} onChange={onChange}
                        placeholder='nome@email.com' required/><br/>
                    <input 
                        type='password' name='password' value={form.password} onChange={onChange}
                        placeholder='Sua senha' required/>
                    <BtnContainer>
                        <input className='btn btn-primary'
                            type='button' onClick={limpar} value='Limpar'/>
                        <input className='btn btn-primary'
                            type='submit' value='Entrar' />
                    </BtnContainer>
                </fieldset>
            </form>
        </Container>
        </>
    )
}

export default Login