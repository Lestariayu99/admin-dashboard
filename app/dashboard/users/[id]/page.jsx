// EDIT USERS
import styles from '@/app/ui/dashboard/users/singleUsers/singleUsers.module.css';
import Image from 'next/image';

const SingleUsersPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
      <div className={styles.imgContainer}>
        <Image src="/noavatar.png" alt="" fill />
        </div>
        Isabella
        </div>
      
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
        <label>Username</label>
        <input type='text' name='username' placeholder='Isabella' />
        <label>Email</label>
        <input type='email' name='email' placeholder='Isabella@gmail.com' />
        <label>Password</label>
        <input type='password' name='password'/>
        <label>Phone</label>
        <input type='text' name='phone' placeholder='+628 123 456 789' />
        <label>Address</label>
        <textarea type='text' name='address' placeholder='Jakarta' />
        <label>Is Admin ?</label>
        <select name='isAdmin' id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active ?</label>
        <select name='isActive' id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
        
      </div>
   </div>
  );
};

export default SingleUsersPage




