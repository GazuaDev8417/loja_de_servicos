'use client'
import Context from "@/context/Context"
import { useContext } from "react"
import { IoIosArrowBack, IoLogoWhatsapp } from 'react-icons/io'
import { useRouter } from "next/navigation"
import Header from "@/components/Header"
import styles from './detail.module.css'
import { convertPhone } from "@/utils/convertPhone"



export default function Detail(){
    const router = useRouter()
    const { states } = useContext(Context)
    const job = states.job
    const message = `Olá, vi seu serviço anunciado no aplicativo Loja de Serviços e gostaria de contratá-lo`
    
    
    return(
        <div>
            <Header
                leftIcon={<IoIosArrowBack
                            className='icon'
                            onClick={()=> router.back()}
                            />}
                title={job.title}
                rightIcon={<div/>}
                />
            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.title}>{job.title}</div>
                    <div className={styles.cardContent}>
                        <b>Descrição: </b>{job.description}<br/><br/>
                        <b>Contato: </b>{convertPhone(job.phone)}<br/><br/>
                        <b>Horário de atendimento: </b>{job.period}
                    </div>
                    <a href={`https://api.whatsapp.com/send?phone=55${job.phone}&text=${message}`} target='_blank'>
                        <IoLogoWhatsapp style={{
                            color:'#25D366',
                            cursor:'pointer',
                            fontSize:'2rem',
                        }}/>
                    </a>
                </div>
            </div>
        </div>
    )
}