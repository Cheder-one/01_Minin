import React, { useState } from 'react';
import API from "../api/index.api";


const Users = () => {
   const [usersArray, setUsersArray] = useState(API.users.fetchAll())

   console.log(API.users.fetchAll()[0]);

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
               <tr>
                  {/* {usersArray.map((item) => (
                     <td key={_id}>
                        {item}
                     </td>
                  ))} */}
               </tr>
            </tbody>
         </table>
      </>
   )
}

export default Users
