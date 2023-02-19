import React, { useState } from "react";
import API from "../api/index.api";

// TODO Сделать удаление el по Delete
// TODO Разбить модули по отдельным функциям
// TODO Сделать подсчет человек в списке. И вывод надписи если людей нет

const Users = () => {
   const [users, setUsersArray] = useState(API.users.fetchAll());

   const handleDeleteUser = (id) => {
      console.log(setUsersArray);
      // setUsersArray.filter((el) => el !== id);
   };

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

                        <td>{user.profession.name}</td>
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
