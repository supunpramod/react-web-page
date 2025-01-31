import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";


const users=[
    {
        id:1,
        name:'Supun',
    },
    {
        id:2,
        name:'Pramod',
    }
];

const Users = () =>{
    return(
        <Box
        sx={{
            width:'calc(100%-100px)',
            margin:'50px',
            marginTop:'50px',
        }}
        
        >
        <UserForm/>
        <UsersTable rows={users}/>
        </Box>
    )

}

export default Users;