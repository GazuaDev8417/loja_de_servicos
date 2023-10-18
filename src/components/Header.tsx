'use client'
import styles from './Header.module.css'


interface HeaderProps{
    leftIcon:any
    title:string
    rightIcon:any
}

export default function Header({ leftIcon, title, rightIcon }:HeaderProps):JSX.Element{
    return(
        <div className={styles.head}>
            {leftIcon}
            <h1>{title}</h1>
            {rightIcon}
        </div>
    )
}