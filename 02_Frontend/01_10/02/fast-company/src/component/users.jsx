import React, { useState } from "react";
import API from "../api/index.api";

const Users = () => {
   const [users, setUsersArray] = useState(API.users.fetchAll());

   // console.log(API.users.fetchAll()[0]._id);

   return (
      <>
         <table className="table">
            <thead>
               <tr>
                  <th scope="col">Имя</th>
                  <th scope="col">Качества</th>
                  <th scope="col">Профессия</th>
                  <th scope="col">Кол-во встреч</th>
                  <th scope="col">Рейтинг</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => {
                  console.log(user.qualities[0].name);
                  return (
                     <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                           {/* {user.qualities.map((el) => {

                           })} */}
                        </td>
                        <td></td>
                        {/* <td>{user.qualities}</td> */}
                        {/* <td>{user.profession}</td> */}
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </>
   );
};

export default Users;
