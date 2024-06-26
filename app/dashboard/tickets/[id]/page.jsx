// EDIT USERS
import styles from '@/app/ui/dashboard/tickets/singleTickets/singleTickets.module.css';
import Image from 'next/image';

const SingleTicketsPage = () => {
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
        <label>Name</label>
        <input type='text' name='name' placeholder='Isabella' />
        <label>Position</label>
        <input type='text' name='position' placeholder='Customer' />
        <label>Created At</label>
        <input type='text' name='createdat'/>
        <label>Date</label>
        <input type='date' name='date' placeholder='08/01/2024' />
        
        <label>Status</label>
        <select name='status' id="status">
          <option value={true}>High</option>
          <option value={true}>Low</option>
          <option value={true}>Normal</option>
        </select>
        <label>Description</label>
        <textarea name='desc' id='desc' rows="16" placeholder='description'></textarea>
        <button>Update</button>
        </form>
        
      </div>
   </div>
  );
};

export default SingleTicketsPage




