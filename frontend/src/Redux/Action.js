export const USERID = "USERID";
export const ADMINNAME = "ADMINNAME";
export const SCHOOL = "SCHOOL";
export const TEACHERS = "TEACHERS";
export const CLASSES = "CLASSES";

import axios from "axios";

export const UserID = (payload) => ({ type: USERID, payload });
export const AdminName = (payload) => ({ type: ADMINNAME, payload });
export const SchoolAction = (payload) => ({ type: SCHOOL, payload });
export const ClassActions = (payload) => ({ type: CLASSES, payload });
export const TeachersAction = (payload) => ({ type: TEACHERS, payload });


export const AdminLogin = (data) => (dispatch) => (
    axios.post("https://school-info-backend-project.herokuapp.com/login", data).then(({ data }) => {
        // console.log('data', data);
        dispatch(UserID(data.admin._id))
        axios.get(`https://school-info-backend-project.herokuapp.com/school/${data.admin._id}`).then(({ data }) => {
            dispatch(SchoolAction(data))
            // console.log('data', data);
        })
        
    })
)


