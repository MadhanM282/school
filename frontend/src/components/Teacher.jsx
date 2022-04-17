import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { ClassActions } from "../Redux/Action";

export const Teacher = ()=>{
    const {teacher,classes} = useSelector((store)=> store)
    console.log('classes', classes);
    console.log('teacher', teacher);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex',flexWrap:"wrap",m:"auto",justifyContent:'space-evenly'}}>
            {teacher&&teacher.map((item)=> <Box key={item._id} sx={{p:1,m:3,}} onClick={()=>{
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
    )
}