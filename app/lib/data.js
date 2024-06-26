// import { User } from "./models";
// import { connectToDB } from "./utils";

// export const fetchUsers= async () => {
// try {
//     connectToDB()
//     const users = await User.find();
//     return users 
// } catch (err) {
//     console.log(err);
//     throw new Error ("Failed to fetch users !")
// }

// };



// import { User } from "./models";
// import { connectToDB } from "./utils";

// export const fetchUsers = async () => {
//     try {
//         console.log('Attempting to connect to DB...');
//         await connectToDB(); // Tunggu koneksi ke database selesai
//         console.log('Connected to DB, fetching users...');
        
//         const users = await User.find();
//         console.log('Fetched users:', users);
        
//         return users;
//     } catch (err) {
//         console.error('Error in fetchUsers:', err); // Gunakan console.error untuk logging error
//         throw new Error("Failed to fetch users!");
//     }
// };


// MENGAMBIL DATA DARI DATABASE 
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
    try {
        await connectToDB(); // Tunggu koneksi ke database selesai
        console.log('Connected to DB, fetching users...');

        const users = await User.find();
        console.log('Fetched users:', users);

        return users;
    } catch (err) {
        console.error('Error in fetchUsers:', err); // Gunakan console.error untuk logging error
        throw new Error("Failed to fetch users!");
    }
};
