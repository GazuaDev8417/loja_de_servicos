'use client'
import Header from "@/components/Header"
import { AiOutlineLogout } from 'react-icons/ai'
import { BsCardList } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { useRouter } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import Context, { ContextContent, Job } from "@/context/Context"
import { BASE_URL } from "@/constants/urls"
import styles from './profile.module.css'



interface User{
    id:string
    name:string
    email:string
    password:string
    subscription:string
}


export default function Profil(){
    const { setters } = useContext(Context) as ContextContent
    const router = useRouter()
    const [jobs, setJobs] = useState<Job[]>([])
    const [title, setTitle] = useState<string>('')
    const [user, setUser] = useState<User>({
        id:'',
        name:'',
        email:'',
        password:'',
        subscription:''
    })


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            router?.push('/')
        }

        getProfile()
        getUserJobs()
    }, [router])


    const getProfile = async()=>{
        try{
            const res = await fetch(`${BASE_URL}/user`, {
                headers: { Authorization: localStorage.getItem('token') || '' }
            })

            if(!res.ok){
                const failed = await res.text()
                if(failed === 'jwt expired'){
                    return alert('Seu token de acesso expirou, faça login novamente.')
                }
                
                return alert(failed)
            }

            const data = await res.json()
            setUser(data)
        }catch(e:any){
            alert(e.message)
        }
    }

    const getUserJobs = async()=>{
        try{
            const res = await fetch(`${BASE_URL}/userjobs`, {
                headers: { Authorization: localStorage.getItem('token') || '' }
            })

            if(!res.ok){
                const failed = await res.text()
                if(failed === 'jwt expired'){
                    return alert('Seu token de acesso expirou, faça login novamente.')
                }
                
                return alert(failed)
            }

            const data = await res.json()
            setJobs(data)
        }catch(e:any){
            alert(e.message)
        }
    }

    const logout = ()=>{
        const decide = window.confirm('Tem certeza que deseja deslogar?')

        if(decide){
            localStorage.clear()
            router.push('/')
        }
    }


    const withMouse = (id:string)=>{
        (document.getElementById(id) as HTMLElement).style.color = 'red'
    }

    const noMouse = (id:string)=>{
        (document.getElementById(id) as HTMLElement).style.color = 'whitesmoke'
    }


    const removeJob = async(job:Job)=>{
        try{
            const decide = window.confirm(`Tem certeza que deseja excluir ${job.title}`)

            if(decide){
                const res = await fetch(`${BASE_URL}/job/${job.id}`, {
                    method:'DELETE',
                    headers: { Authorization: localStorage.getItem('token') || '' }
                })

                if(!res.ok){
                    alert('Falha ao deletar serviço')
                }

                getUserJobs()             
            }
        }catch(e:any){
            alert(e.message)
        }
    }


    const filtro:Job[] = jobs && jobs.filter(item=>{
        return item.title.toLowerCase().includes(title.toLowerCase())
    })

    return(
        <div>
            <Header
                leftIcon={<BsCardList 
                            onClick={()=> router.push('/list')}
                            className='icon'/>}
                title="Perfil do Usuário"
                rightIcon={<AiOutlineLogout
                            onClick={logout}
                            className='icon'/>}
                />
            <div className={styles.container}>
                <div className={styles.userSection}>
                    <b>Nome: </b>{user.name}<br/>
                    <b>Email: </b>{user.email}
                </div>
                <div className={styles.title}>
                        Serviços cadastrados
                </div>           
                <div style={{border:'1px solid', margin:20}}/>
                <div style={{position:'relative'}}>
                        <input  
                            placeholder='Título do serviço                  🔎' 
                            className={styles.input}
                            type='text'
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div style={{overflow:'auto'}} >
                    {filtro.length > 0 ? (
                        filtro.map(servico=>{
                            return(
                                <div className={styles.card} 
                                    key={servico.id}>
                                    <div onClick={()=>{
                                        setters.setJob(servico)
                                        router.push('/detail')
                                    }} 
                                        style={{cursor:'pointer'}}>
                                        {servico.title}
                                    </div>
                                    <MdDelete style={{fontSize:20, cursor:'pointer', color:'whitesmoke'}}
                                        id={servico.id}
                                        onMouseOver={()=> withMouse(servico.id)}
                                        onMouseOut={()=> noMouse(servico.id )}
                                        onClick={()=> removeJob(servico)} />
                                </div>

                            )
                        })        
                    ) : null}
                </div>
            </div>
        </div>
    )
}