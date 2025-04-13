// import React from 'react'
import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./userSliice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import React from "react";
function UserList() {
  const data =useAppSelector((state)=> state.user)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchUser())
  },[])
  return (
    <div>
      <h2>list of user:</h2>
      {data.loading && <div> Loading..</div>}
      {!data.loading && data.error? <div>Error: {data.error}</div>:null }
      {!data.loading && data.data.length ? (<ul>
        {data.data.map((user) => (
        <li key={user.id} >
          {user.name}
        </li>
        ))}
      </ul> ): null }
    </div>
  );
}
export default UserList;
