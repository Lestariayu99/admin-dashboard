import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/tickets/tickets.module.css"
import Search from "@/app/ui/dashboard/search/search";

const TicketsPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for tickets..." />
          <Link href="/dashboard/tickets/add">
            <button className={styles.addButton}>Add New Tickets</button>
          </Link>
        </div>
        <table className={styles.table}>
        <thead className={styles.table}>
          <tr>
            <td>Name</td>
            <td>Position</td>
            <td>Created</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
  
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage} />{styles.username}</div>
            </td>
            <td>Accounting</td>
            <td>24.05.2024</td>
            <td>Admin</td>
            <td>active</td>
          
            <td>
              <Link href="/dashboard/tickets/test">
              {/* <div className={styles.buttons}> */}

                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              {/* </div> */}
            </td>
          </tr>
        </tbody>
        </table>
        <Pagination/>
      </div>
    )
  }
  
  export default TicketsPage;