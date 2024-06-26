// MEMBUAT ADD TICKETS BARU

import styles from '@/app/ui/dashboard/users/addUsers/addUsers.module.css'

const AddUsersPage = () => {
    return (
      <div className={styles.container}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='username' name='username' required />
          <input type='email' placeholder='email' name='email' required />
          <input type='password' placeholder='password' name='password' required />
          <select name='isAdmin' id='isAdmin'>
            <option value="{false}">isAdmin</option>
            <option value="{false}">Yes</option>
            <option value="{false}">No</option>
          </select>
          <select name='isActive' id='isActive'>
            <option value="{true}">isActive</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
          </select>
          <textarea 
          name="address"
          id="address"
          rows="16"
          placeholder='Address'
          >
          </textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
  
  export default AddUsersPage