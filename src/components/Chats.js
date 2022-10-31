import React, { useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from "react-chat-engine";
import axios from "axios"
//components
import Navbar from './Navbar';
// styles
import styles from "./Chats.module.css"
// context
import { AuthContext } from '../context/AuthContextProvider';

const Chats = () => {

    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
        if(!user) {
            history.push("/");
            return;
        }
        axios.get("https://api.chatengine.io/users/me", {
            headers: {
                "project-id": "8c5ba250-da52-4796-91cb-0d0b5846bd77",
                "user-name": user.email,
                "user-secret": user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formdata = new FormData();
            formdata.append("email", user.email);
            formdata.append("username", user.email);
            formdata.append("secret", user.uid);
            getFile(user.photoURL)
                .then(avatar => {
                    formdata.append("avatar", avatar, avatar.name)
                    axios.post("https://api.chatengine.io/users/", formdata, {
                        headers: {
                            "private-key": "a987dbde-d7e1-451b-80db-c9b404890531",
                        }
                    })
                    .then(() => setLoading(false))
                    .catch(error => console.log(error))    
                })
        })
    }, [user, history])
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", {type: "image/jpeg"})
    }
    const logOutHandler = async() => {
        await auth.signOut();
         history.push("/")
    }
    if(!user || loading) return <h2 className={styles.loading}>Loading...</h2>
    return (
        <div className={styles.container}>
            <Navbar logOutHandler={logOutHandler}/>
            <ChatEngine 
              height="calc(100vh - 50px)"    
              projectID= "8c5ba250-da52-4796-91cb-0d0b5846bd77"
              userName={user.email}
              userSecret={user.uid}
            />  
        </div>
    );
};
export default Chats;