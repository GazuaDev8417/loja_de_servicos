'use client'
import Header from "@/components/Header"
import { IoAddCircleOutline } from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { useRouter } from "next/navigation"
import { BASE_URL } from "@/constants/urls"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import styles from './list.module.css'
import Context, { Job } from "@/context/Context"
import { convertPhone } from "@/utils/convertPhone"



export default function List(){
    const { setters } = useContext(Context)
    const router = useRouter()
    const [title, setTitle] = useState<string>('')
    const [jobs, setJobs] = useState<Job[]>([])


    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            router?.push('/')
        }

        getAllJobs()
    }, [router])


    const getAllJobs = async()=>{
        try{
            const res = await fetch(`${BASE_URL}/jobs`)

            if(!res.ok){
                return alert('Erro ao buscar serviços!')
            }
            const data = await res.json()
            setJobs(data)
        }catch(e:any){
            alert(e.message)
        }        
    }


    const handleTitle = (e:ChangeEvent<HTMLInputElement>):void=>{
        setTitle(e.target.value)
    }


    const filteredJobs = jobs && jobs.filter((job:Job)=> 
        job.title.toLowerCase().includes(title.toLocaleLowerCase()))



    const getJobById = async(job:Job)=>{
        setters.setJob(job)
        router.push('/detail')
    }

    return(
            <>
            <Header
                leftIcon={<IoAddCircleOutline 
                    onClick={()=> router.push('/registJob')}
                    className='icon'/>}
                title="Lista de Serviços"
                rightIcon={<BsFillPersonFill 
                            onClick={()=> router.push('/profile')}
                            className='icon'/>}
                />
        <div className={styles.container}>
            <input 
                type="search"
                onChange={handleTitle}
                className={styles.input}
                placeholder="Nome do serviço" />
            <div className={styles.cardContainer}>
                {filteredJobs && filteredJobs.map(job=>(
                    <div key={job.id} className={styles.card}>
                        <div className={styles.title}>{job.title}</div>
                        <div className={styles.cardContent}>
                            <b>Descripção: </b>{job.description}<br/><br/>
                            <b>Contato: </b>{convertPhone(String(job.phone))}<br/><br/>
                            <b>Horário de atendimento: </b>{job.period}
                        </div>
                        <button className={styles.btn}
                            onClick={()=> getJobById(job)}>
                            Entrar em contato
                        </button>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}