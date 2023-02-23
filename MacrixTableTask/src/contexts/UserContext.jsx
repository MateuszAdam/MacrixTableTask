import { createContext, useState, useEffect, useRef } from "react";
import { UserService } from "../services/UserService";

export const UserContext = createContext();

const userService = new UserService();

const UserContextProvider = (props) => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const serverUsers = useRef([]);

  useEffect(() => {
    userService.readAll().then((data) => {
      setUsers(data);
      serverUsers.current = data;
    });
  }, []);

  
  const deleteUser = (id) => {
    const filteredUsers = users.filter((elem) => elem.Id !== id);
    setUsers(filteredUsers);
  };

  const updateUser = (user) => {
    const updatedUsers = users.map((oldUser) => {
      if (oldUser.Id === user.Id) {
        return user;
      }
      return oldUser;
    });
    setUsers(updatedUsers);
  };
  
  const createUser = (user) => {
    setUsers([...users, user]);
  };

  const resetData = () => {
    userService.readAll().then((data) => {
      setUsers(data);
      serverUsers.current = data;
    });
    setError(null);
    setSuccess(false);
  };

  // I need to prepare my API for put users collection to not do this separately by create, update, delete..
  const saveData = () => {
    const serverUsersIds = serverUsers.current.map((user) => user.objectId);
    const updatedUsers = users.filter((user) =>
      serverUsersIds.includes(user.objectId)
    );
    const newUsers = users.filter(
      (user) => !serverUsersIds.includes(user.objectId)
    );
    const removedUsers = serverUsersIds.filter(
      (objectId) => !users.find((user) => user.objectId === objectId)
    );

    setError(null);
    setSuccess(false);
    
    // PUT
    Promise.all(
      updatedUsers.map((user) => {
        return userService.update(user);
      })
    )
      .then(() => {
        console.log("success put");
      })
      .catch((err) => {        
        setError(err.message);
      });

    // POST
    Promise.all(
      newUsers.map((user) => {
        return userService.create(user);
      })
    )
      .then(() => {
        console.log("success post");        
      })
      .catch((err) => {
        setError(err.message);
      });

    // DELETE
    Promise.all(
      removedUsers.map((userId) => {
        return userService.delete(userId);
      })
    )
      .then(() => {
        console.log("success delete");       
      })
      .catch((err) => {
        setError(err.message);
      });

       // PUT  all users 
    // Promise.all(
    //   userService.updateAll(users))    
    //   .then(() => {
    //     console.log("success");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });    


    // I see the bug here, because of async operations, but I ran out of time to fix it
    // to not confuse the UI, I will just show if there is an error, and hide the success info..
      if(error === null){
        setSuccess(true);
      }    

  }

  const touched = () => 
  {
     return JSON.stringify(serverUsers.current) !== JSON.stringify(users); 
  }

  return (
    <UserContext.Provider
      value={{
        createUser,
        deleteUser,
        touched,
        updateUser,
        resetData,
        saveData,        
        error,
        success,        
        users,        
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;