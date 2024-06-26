// "use client":

import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Image from 'next/image';
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
// import { useEffect, useState } from 'react';

const UsersPage = async () => {
  let users = [];

  try {
    users = await fetchUsers();
    console.log('Users on page:', users);
  } catch (err) {
    console.error('Error on UsersPage:', err);
  }


// const UsersPage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const usersData = await fetchUsers();
//         setUsers(usersData);
//       } catch (err) {
//         console.error('Error fetching users:', err);
//       }
//     };

//     getUsers();
//   }, []);




  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New Users</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead className={styles.table}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.user}>
                  <Image src={user.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.userImage} />{user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination/>
    </div>
  );
};

export default UsersPage;



// import { useEffect, useState } from 'react';
// import { fetchUsers } from '../../../lib/data'; // Pastikan pathnya benar
// import styles from '../../../styles/Users.module.css'; // Gaya CSS untuk halaman ini
// import Link from 'next/link';
// import Image from 'next/image';


//   return (
//     <div className={styles.container}>
//       <div className={styles.top}>
//         <input type="text" placeholder="Search for a user..." className={styles.search} />
//         <Link href="/dashboard/users/add">
//           <button className={styles.addButton}>Add New Users</button>
//         </Link>
//       </div>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Created At</td>
//             <td>Role</td>
//             <td>Status</td>
//             <td>Action</td>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length > 0 ? (
//             users.map((user) => (
//               <tr key={user._id}>
//                 <td>
//                   <div className={styles.user}>
//                     <Image src={user.img || "/noavatar.png"} alt="" width={40} height={40} className={styles.userImage} />
//                     {user.username}
//                   </div>
//                 </td>
//                 <td>{user.email}</td>
//                 <td>{new Date(user.createdAt).toLocaleDateString()}</td>
//                 <td>{user.isAdmin ? 'Admin' : 'User'}</td>
//                 <td>{user.isActive ? 'Active' : 'Inactive'}</td>
//                 <td>
//                   <Link href={`/dashboard/users/${user._id}`}>
//                     <button className={`${styles.button} ${styles.view}`}>View</button>
//                   </Link>
//                   <button className={`${styles.button} ${styles.delete}`}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No users found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersPage;
