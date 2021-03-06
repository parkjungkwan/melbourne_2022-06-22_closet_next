import React, {useState} from "react";
import Register from '@/components/users/Join'
import { NextPage } from "next";
import { IRegister } from "@/types";
import Join from "@/components/users/Join";
/** 
export default function RegisterPage({newUser}: InferGetStaticPropsType<typeof getStaticProps>) {
    const[join, setJoin] = useState(newUser)
    const register = async (e: React.FormEvent, formData: IRegister) =>{
        e.preventDefault
        const register: IRegister = {
            userName: formData.userName,
            password: formData.password,
            name: formData.name,
            email: formData.email
        }
        setJoin([register, ...join])
        alert(`페이지로 데이터 전송 ${JSON.stringify(formData)}`)
    }
    return <>
    <Register reg = {register}/>
    </>
}
*/
const JoinPage: NextPage = () => {
    return(
    <Join/>
    )
}
export default JoinPage

/** 
export async function getStaticProps() {
    const res = await fetch(BASE_URL)
    const newUser: IRegister[] = await res.json()
    return { props: {newUser}}
}
const BASE_URL : string = "http://localhost:8080"
*/


