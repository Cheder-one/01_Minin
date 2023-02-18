import React, { useState } from "react";
import API from "../api/index.api";

const Users = () => {
   const [users, setUsersArray] = useState(API.users.fetchAll());

   // console.log(API.users.fetchAll()[0]._id);

   return (
      <>
         <h5>
            <span className="badge bg-primary">
               n Человек готовы встретиться с тобой
            </span>
         </h5>

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
                  return (
                     <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                           {user.qualities.map((el) => {
                              console.log(el.color);
                              return (
                                 <span
                                    className="badge bg-primary"
                                    key={el._id}
                                 >
                                    {el.name}
                                 </span>
                              );
                           })}
                        </td>

                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </>
   );
};

export default Users;
