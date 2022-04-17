import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { Teacher } from "./Teacher";


export const Schools = () => {
    const { userId, School } = useSelector((store) => store)
 

    return (
        <Box>
            {School&&School.map((e,i) => {
                return <Box key ={i}>
                    <Typography variant="h2">{e.school_name}</Typography>
                    <img src={e.school_img} alt="" />
                </Box>
            })}
            <Teacher/>
        </Box>
    )
}