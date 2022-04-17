import {ADMINNAME, CLASSES, SCHOOL, TEACHERS, USERID} from './Action'
const initial  = {
    userId:"",
    auth:false,
    name:"",
    School:[],
    classes:[],
    teacher:[]
};

export const Reducer = (store = initial,{type,payload})=>{
    switch(type){
        case USERID: return{...store,userid:payload,auth:true};
        case ADMINNAME: return{...store,name:payload};
        case SCHOOL: return{...store,School:payload};
        case CLASSES: return{...store,classes:payload};
        case TEACHERS : return{...store,teacher:payload};
        default : return{store}
    }

}