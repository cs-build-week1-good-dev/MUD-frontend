import axios from "axios";
export const PUSHER_SEND_START = "PUSHER_SEND_START"
export const PUSHER_SEND_SUCCESS = "PUSHER_SEND_SUCCESS"
export const PUSHER_SEND_FAILURE = "PUSHER_SEND_FAILURE"



export const pushMessage = message => dispatch =>{
    const body = message
    dispatch({type:PUSHER_SEND_START})
    return(
        axios
        .post(
            'http://localhost:8000/api/adv/say/',body,{

                headers:{
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                    Authorization: `Token 3bee58df292ce4c461076e022acc9e4ecfdd28b7`
                }
            }
        )
        .then(res =>{
            dispatch({type:PUSHER_SEND_SUCCESS,payload:res.data})
        })
        .catch(
            err =>{
                dispatch({type:PUSHER_SEND_FAILURE,payload:err})
            }
        )
    )
}