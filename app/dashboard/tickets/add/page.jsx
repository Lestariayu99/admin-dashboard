// MEMBUAT ADD TICKETS BARU

import styles from '@/app/ui/dashboard/tickets/addTickets/addTickets.module.css'

const AddTicketsPage = () => {
    return (
      <div className={styles.container}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='title' name='title' required />
          <select name='cat' id='cat'>
            <option value="general">Choose a category</option>
            <option value="general"></option>
            <option value="general"></option>
            <option value="general"></option>

          </select>
          <input type='number' placeholder='price' name='price' />
          <input type='number' placeholder='price' name='stock' />
          <input type='text' placeholder='price' name='color' />
          <input type='text' placeholder='price' name='size' />
          <textarea name='desc' id='desc' rows="16" placeholder='Description'>

          </textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  };
  
  export default AddTicketsPage