import React, { useState } from "react";
import API from "../api/index.api";

// TODO Разбить модули по отдельным функциям

const Users = () => {
   const [users, setUsersArray] = useState(API.users.fetchAll());

   const handleDeleteUser = (id) => {
      setUsersArray(users.filter((user) => user._id !== id));
   };

   const calcNumberUsers = () => {
      return users.length > 0
         ? `${users.length} Человек готовы встретиться с тобой`
         : "Список встреч пуст";
   };

   return (
      <>
         <h5>
            <span
               className={`badge bg-${users.length > 0 ? "primary" : "danger"}`}
            >
               {calcNumberUsers()}
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
                  <th scope="col"></th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => {
                  return (
                     <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>
                           {user.qualities.map((el) => {
                              return (
                                 <span
                                    className={`badge bg-${el.color}`}
                                    key={el._id}
                                 >
                                    {el.name}
                                 </span>
                              );
                           })}
                        </td>

                        <td key={user.profession._id}>
                           {user.profession.name}
                        </td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}/5</td>
                        <td>
                           <button
                              className="btn btn-danger"
                              onClick={() => handleDeleteUser(user._id)}
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </>
   );
};

export default Users;
