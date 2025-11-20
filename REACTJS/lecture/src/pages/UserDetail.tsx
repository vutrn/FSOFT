import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/users";

const UserDetail = () => {
  const [user, setUSer] = useState<any>(null);
  const { userId } = useParams();

  // const user = users.find((user) => user.id === Number(userId));
  useEffect(() => {
    getUserById(Number(userId)).then((res)=>{
      setUSer(res)
    })
  }, []);

  return (
    <div>
      UserDetail
      {user ? (
        <div>
          <p>{user.name}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
