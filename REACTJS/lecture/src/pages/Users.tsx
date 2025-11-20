import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../services/users";

const Users = () => {

  const token = localStorage.getItem('token')
  console.log(token)

  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    // localStorage.setItem('token', 'sample_token_12345'); // For testing purpose
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);


  return (
    <div>
      Users
      {users.map((user: any) => {
        return (
          <div className='border p-2 mb-2' key={user.id}>
            <p>
              {user.name} - {user.email}
            </p>
            <Link to={`/users/${user.id}`}>Detail</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
