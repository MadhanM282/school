import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';

import { styled, alpha } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { ClassActions } from '../Redux/Action';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));


export const SearchAppBar = () => {

    const [suggestions, setSuggestions] = React.useState([]);

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const handleChange = (value) => {
        if (!value) {
            setSuggestions([]);
            return;
        }
        fetch(
            `https://school-info-backend-project.herokuapp.com/teacher_name/search?search=${value}`
        )
            .then((res) => res.json())
            .then((json) => setSuggestions(json));
    };

    console.log('setSuggestions', suggestions);


    const optimizedFn = React.useCallback(debounce(handleChange), []);


    return (


        <Box sx={{ mt: 3, display: { xs: "none", md: "inline-block" }, height: "50px" }}>


            <Search>

                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => optimizedFn(e.target.value)}
                />
            </Search>
            <Box>
                {suggestions.length > 0 && (
                    <div style={{backgroundColor:"white"}} className="autocomplete">
                        {suggestions.map((el, i) => (
                            <div  onClick={() => {
                                dispatch(ClassActions(el.classes_ids))
                                navigate("/class")
                            }} key={i} className="autocompleteItems">

                                <h3 style={{ color: "black", }}>{el.teacher_name}</h3>

                            </div>
                        ))}
                    </div>
                )}
            </Box>




        </Box>

    )
}