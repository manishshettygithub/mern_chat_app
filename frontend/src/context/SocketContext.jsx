import { createContext, useState,useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

 const SocketContext=createContext()

export const useSocketContext = ()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider =({children})=>{
    const [socket,setsocket]=useState(null)
    const [onlineUsers,setOnlineUsers]=useState([])
    const {authUser}= useAuthContext();
    useEffect(() => {
        if(authUser){
            const socket =io("https://realtime-web-chat-app.onrender.com/",{
                query:{
                    userId:authUser._id
                }

            });

            //used to listen to the events. can be used both on client and server side 
            setsocket(socket)
            socket.on("getOnlineUsers",(users)=>{
                setOnlineUsers(users)
            })

            return ()=> socket.close();
        }else{
            if(socket){
                socket.close()
                setsocket(null)
            }

         
        }
    },[authUser])

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}