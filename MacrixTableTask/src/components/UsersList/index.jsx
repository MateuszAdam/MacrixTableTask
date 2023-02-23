import { useContext } from "react";
import Rows from '../Rows';
import { Columns } from '../Columns';
import { UserContext } from '../../contexts/UserContext';
import { FaUserPlus } from "react-icons/fa";
import { Button } from "../Button";
import { v4 } from "uuid";

export function UsersList() {

  const { users, deleteUser, createUser, updateUser } = useContext(UserContext);

  const addNewRow = () => {

    createUser({
      Id: users.length + 1,
      objectId: v4(),
      FirstName: "",
      LastName: "",
      StreetName: "",
      HouseNumber: "",
      ApartmentNumber: "",
      PostalCode: "",
      Town: "",
      PhoneNumber: "",
      DateOfBirth: "",
      Age: "",
    });
  };

  function handleRemove(id) {
    deleteUser(id);
  };
 

  const onCellUpdate = (id, key, value) => {
    const user = users.find((user) => user.Id === id);
    updateUser({
      ...user,
      [key]: value,
    });
  };

  const handleUpdatedDate = (id, key, dateOfBirth) => {

    if(key === "DateOfBirth")
    {
      if(dateOfBirth !== "")
      {      
        let today = new Date();
        let DoB =  new Date(dateOfBirth); 
        let age = today.getFullYear() - DoB.getFullYear();
        
        handleUpdateUserAge(id,age);
      }
      else
      handleUpdateUserAge(id,"");
    }
    
  }

  function handleUpdateUserAge(id, value) {
    const user = users.find((user) => user.Id === id);
    updateUser({
          ...user,
          ['Age']: value,
        });    
  }

  return (
    <div className="ui-block">
      <h1 style={{color: "whitesmoke"}}>Manage Users</h1>
      <table>
        <thead >
          <Columns />
        </thead>        
          <Rows 
          handleRemove = {handleRemove}
          onCellUpdate = {onCellUpdate}
          handleUpdatedDate = {handleUpdatedDate}
          users = {users}
          />          
      </table>
      <span style={{ display: "flex", justifyContent: "left" }}>
        <Button
          onClick={() => {
            addNewRow();
          }}
        >
          <FaUserPlus />
        </Button>
      </span>
      { users.length === 0 ? (<span style={{textAlign:"center", color:"gray", fontSize: 40}}>no records found</span>  ) : null }
    </div>
  );
}

export default UsersList;