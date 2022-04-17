import { Box,Button, TextField} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import {AdminLogin} from '../Redux/Action'
import {useState} from "react"
import { useNavigate } from "react-router"
export const Login = ()=>{

    const navigate = useNavigate()

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const dispatch = useDispatch()
    const PostData = ()=>{
        dispatch(AdminLogin(data))
    }
    const handelchange = (e)=>{
        const {id,value} = e.target
        setData({...data,[id]:value})
    }

//madhanmohan282@gmail.com
//12367
// epigne2@psu.edu
// Eduino@111


    return (
        <Box sx={{mt:"100px"}}>
            <TextField onChange={handelchange} id="email" label="Email" variant="outlined" />
            <br />
            <br />
            <TextField onChange={handelchange} id="password" label="Password" variant="outlined" /> <br /> <br />
            <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} onClick={()=>{
                PostData()
                navigate("/")
            }}>Login</Button>
        </Box>
    )
}