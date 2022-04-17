import { Pagination, Stack, Typography } from "@mui/material";
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
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [Size, SetSize] = useState(1)
    const [page, setPage] = useState(1);
    let size = Math.ceil(14 / 4)
    useEffect(() => {
        axios.get(`https://school-info-backend-project.herokuapp.com/teacher?count=${page}`).then(({ data }) => {
            dispatch(TeachersAction(data))
        })
    }, [page])

    if (!auth) {
        <Navigate to="/login" />
    }
    const handleChange = (event, value) => {
      setPage(value);
    };
  

    return (
        <Box>
            
            <Box sx={{ display: 'flex', flexWrap: "wrap", m: "auto", justifyContent: 'space-evenly' }}>
                {teacher && teacher.map((item) => <Box key={item._id} sx={{ p: 1, m: 3, }} onClick={() => {
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
            <Box sx={{width:"fit-content",margin:"auto"}}>
                <Stack spacing={2}>
                    
                    <Pagination count={size-1} page={page} onChange={handleChange} />
                </Stack>

            </Box>
        </Box>
    )
}