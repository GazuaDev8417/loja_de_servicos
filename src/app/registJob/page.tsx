'use client'
import Header from "@/components/Header"
import { BsCardList, BsFillPersonFill } from 'react-icons/bs'
import { useRouter } from "next/navigation"
import styles from './registJob.module.css'
import { ChangeEvent, FormEvent, useState } from "react"
import { BASE_URL } from "@/constants/urls"


interface Form{
    title:string
    description:string
    phone:string
    period:string
}

export default function RegistJob(){
    const router = useRouter()
    const [form, setForm] = useState<Form>({
        title:'',
        description:'',
        phone:'',
        period:''
    })


    const onChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        const { name, value } = e.target
        setForm({...form, [name]:value})
    }


    const regist = async(e:FormEvent<HTMLFormElement>):Promise<void>=>{
        try{
            e.preventDefault()
    
            const body = {
                title: form.title,
                description: form.description,
                phone: form.phone,
                period: form.period
            }

            const res = await fetch(`${BASE_URL}/jobs`, {
                method:'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token') || ''
                },
                body: JSON.stringify(body)
            })
            if(!res.ok){
                return alert('Erro ao cadastrar serviço!')
            }

            const data = await res.text()
            alert(data)
            router.push('/list')
        }catch(e:any){
            alert(e.message)
        }
    }


    const clearForm = ()=>{
        setForm({
            title:'',
            description:'',
            phone:'',
            period:''
        })
    }

    return(
        <div>
            <Header
                leftIcon={<BsCardList
                            onClick={()=> router.push('/list')} 
                            className='icon'/>}
                title="Cadastrar Serviço"
                rightIcon={<BsFillPersonFill 
                            onClick={()=> router.push('/profile')}
                            className='icon'/>}
                />
            <div className={styles.container}>
                <form onSubmit={regist} className={styles.form}>
                    <fieldset className={styles.fieldset}>
                        <legend>Preencha com os dados do serviço</legend>
                        <input className={styles.input}
                            type='text'
                            name='title'
                            value={form.title}
                            onChange={onChange}
                            placeholder='Nome do serviço' required/>
                        <textarea className={styles.textarea}
                            name='description' 
                            value={form.description} 
                            onChange={onChange}
                            placeholder='Descricao' required/>
                        <input className={styles.input} 
                            type='tel' 
                            name='phone'
                            value={form.phone} 
                            onChange={onChange}
                            placeholder='DDD e telefone' required/>
                        <input className={styles.input}
                            type='text'
                            name='period' 
                            value={form.period} 
                            onChange={onChange}
                            placeholder='Período de atendimento' required/>
                        <div className={styles.btnContainer}>
                            <input type='button' className={styles.btn} onClick={clearForm} value='Limpar'/>
                            <button className={styles.btn}>Cadastrar</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}