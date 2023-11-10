import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL, headers } from '../../constants/url'
import Header from '../../components/Header'
import { Container } from './styled'




export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email:'visitante@email.com',
    password:'123456'
  })


  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      navigate('/list')
    }
  }, [])


  const onChange = (e:ChangeEvent<HTMLInputElement>):void=>{
    const { name, value } = e.target
    setForm({...form, [name]:value})
  }


  const login = async(e:FormEvent<HTMLFormElement>):Promise<void>=>{
    e.preventDefault()

    const body = {
      email: form.email,
      password: form.password
    }

    axios.post(`${BASE_URL}/login`, body, headers).then(res=>{
        console.log(res.data)
    }).catch(e=>{
        alert(e.response.data)
    })
    
  }


  const clearForm = ():void=>{
    setForm({
      email:'',
      password:''
    })
  }


  return (
    <>
      <Header
        leftIcon={<div/>}
        title='Login'
        rightIcon={<div/>}
        />
      <Container>
        <form className='form' 
          onSubmit={login}>
          <fieldset className='fieldset'>   
            <legend>Coloque suas credenciais de acesso</legend>     
            <input className='input'
              placeholder='nome@email.com'
              onChange={onChange} 
              type="email" 
              name="email"
              value={form.email}
              required/>
            <input className='input'
              placeholder='Sua senha'
              onChange={onChange} 
              type="password"
              name="password"
              value={form.password}
              required/>
            <div className='btnContainer'>
              <input className='button' 
                type="button" value="Limpar" onClick={clearForm}/>
              <button className='button'>Entrar</button>
            </div>
            </fieldset>
        </form>
      </Container>
    </>
  )
}
