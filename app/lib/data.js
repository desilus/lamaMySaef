import { User } from "./models";
import { connectToDB } from "./utils";


export const fetchUsers = async (q, page) => {

    // console.log(q)
    const regex = new RegExp(q,"i")
    const ITEM_PER_PAGE = 2



    try {
        connectToDB()
        const count = await User.countDocuments({ username: {$regex: regex}});
        const users = await User.find({username:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));   
            return  {count, users};
            } catch (error) {
                console.log(error);
                throw new Error ("Failed to fetch");
            }
};

export const fetchUser = async (id) => {

    // console.log(q)
    
    try {
        connectToDB()
        const user = await User.findById(id)
        return user;
            } catch (error) {
                console.log(error);
                throw new Error ("Failed to fetch");
            }
};