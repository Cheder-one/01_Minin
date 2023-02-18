import React, { useState, useEffect } from 'react';
import API from "../api/index.api";

const renderUsers = (usersArray) => {
   return (
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

         {usersArray &&

            <tbody>

               {usersArray.map(el => (

                  <tr key={el._id}>

                     <td >{el.name}</td>

                  </tr>

               ))}

            </tbody>}

      </table>

   )
}

const Users = () => {

   const [usersArray, setUsersArray] = useState(null)

   useEffect(() => {

      const fetchData = async () => {

         const data = await API.users.fetchAll();

         setUsersArray(data);

      }; fetchData();
   }, []); console.log(API.users.fetchAll()[0]._id); return (<>           {renderUsers(usersArray)}        </>)
}
export default Users