import React from "react";
import api from "../api";


const Users = () => {
   console.log(api.users.fetchAll());
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

            </tbody>
         </table>
      </>
   )
}

export default Users