import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Navigate } from "react-router";
import { ClassActions } from "../Redux/Action";
import Button from '@mui/material/Button';
import { TeachersAction } from "../Redux/Action"
export const Teacher = () => {
    const { teacher, classes } = useSelector((store) => store)
    const auth = useSelector((store) => store)
    console.log('auth', auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Size, SetSize] = useState(1)
    console.log('Size', Size);
    let size = Math.ceil(14 / 4)
    console.log('size', size);
    useEffect(() => {
        axios.get(`https://school-info-backend-project.herokuapp.com/teacher?count=${Size}&skip=4`).then(({ data }) => {
            console.log('teacher', data);
            dispatch(TeachersAction(data))
        })
    }, [Size])
    
    if (!auth) {
        <Navigate to="/login" />
    }
    
    
    return (
        <Box>
            <Box>
               

                   <Button onClick={() => {
                    SetSize(Size+1)
                   }}>next</Button>
                

            </Box>
            <Box sx={{ display: 'flex', flexWrap: "wrap", m: "auto", justifyContent: 'space-evenly' }}>
                {teacher && teacher.map((item) => <Box key={item._id} sx={{ p: 1, m: 3, }} onClick={() => {
                    console.log('e', item.classes_ids);
                    let e = item.classes_ids
                    dispatch(ClassActions(e))
                    navigate("/class")
                }}>
                    <Typography variant="h4">{item.teacher_name}</Typography>
                    <Typography variant="h6" >{item.gender}</Typography>
                    <Typography>{item.age}</Typography>
                    <img src={item.img_url} alt="No image" />
                </Box>)}
            </Box>
        </Box>
    )
}