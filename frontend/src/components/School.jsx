import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, Navigate } from "react-router";
import { Teacher } from "./Teacher";


export const Schools = () => {
    const [auths, Setauth] = useState(false)
    const { userId, School, auth } = useSelector((store) => store)

    const au = useSelector((store) => store.store.auth)
    console.log('auth', au);
    const navigate = useNavigate()


    return (
        <Box>
            {School && School.map((e, i) => {
                return <Box key={i}>
                    <Typography variant="h2">{e.school_name}</Typography>
                    <img src={e.school_img} alt="" />
                </Box>
            })}
            <Teacher />
        </Box>
    )
}