import { Box} from "@mui/material"
export const Signup = ()=>{
    return (
        <Box>
            <TextField id="firstName" label="firstName" variant="outlined" />
            <TextField id="lastName" label="lastName" variant="outlined" />
            <TextField id="email" label="Email" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
        </Box>
    )
}