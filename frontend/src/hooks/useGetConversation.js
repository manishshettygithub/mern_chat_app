import React, { useEffect, useState } from 'react'

const useGetConversation = () => {

    const [loading,setLoading]=useState(false);
    const [conversations,setConversation]=useState([])

    useEffect(()=>{
        const fetchConversation=async()=>{
            setLoading(true)
            try {
                const response=await fetch('/api/users');
                const data=await response.json();
                if(data.error){
                    throw Error(data.error)
                }
                setConversation(data)
                
            } catch (error) {
                toast.error(error)
                
            }finally{
                setLoading(false)
            }
        }
        fetchConversation();
    },[]);
    return {conversations,loading};
}

export default useGetConversation