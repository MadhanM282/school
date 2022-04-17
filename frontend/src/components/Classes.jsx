import { useSelector } from "react-redux"
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Classes = () => {
    const { classes } = useSelector((store) => store)
    console.log('classes', classes);


    return (
        <Box sx={{display:'flex',justifyContent:"space-evenly"}}>
            {classes && classes.map((item) => <Box key={item._id}>
                <Typography sx={{border:1,m:2,p:2,bgcolor:"#bee7ff"}} align="left">Section Name:- {item.section}</Typography>
                <Typography sx={{border:1,m:2,p:2,bgcolor:"#ffe7a4"}} align="left">Grade:- {item.grade}</Typography>
                <Typography sx={{border:1,m:2,p:2,bgcolor:"#d7ffc5"}} align="left">Subject:- {item.subject}</Typography>
            </Box>)}
        </Box>
    )
}