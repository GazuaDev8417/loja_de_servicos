'use client'
import styles from './login.module.css'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  const [form, setForm] = useState({
    email:'',
    password:''
  })


  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      router?.push('/list')
    }
  }, [router])


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

    try{
      const res = await fetch('https://loja-de-servicos-server.vercel.app/login',{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      
      if(!res.ok){
        return alert('Erro ao realizar login')
      }

      const data = await res.text()
      localStorage.setItem('token', data)
      router.push('/list')
    }catch(e:any){
      alert(e.message)
    }
  }


  const clearForm = ():void=>{
    setForm({
      email:'',
      password:''
    })
  }


  return (
    <main>
      <Header
        leftIcon={<div/>}
        title='Login'
        rightIcon={<div/>}
        />
      <div className={styles.container}>
        <form className={styles.form} 
          onSubmit={login}>
          <fieldset className={styles.fieldset}>   
            <legend>Coloque suas credenciais de acesso</legend>     
            <input className={styles.input}
              placeholder='nome@email.com'
              onChange={onChange} 
              type="email" 
              name="email"
              value={form.email}
              required/>
            <input className={styles.input}
              placeholder='Sua senha'
              onChange={onChange} 
              type="password"
              name="password"
              value={form.password}
              required/>
            <div className={styles.btnContainer}>
              <input className={styles.button} 
                type="button" value="Limpar" onClick={clearForm}/>
              <button className={styles.button}>Entrar</button>
            </div>
            </fieldset>
        </form>
      </div>
    </main>
  )
}
