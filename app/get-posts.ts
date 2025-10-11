import postsData from "./posts.json"
import redis from "./redis";
import commaNumber from "comma-number"



export type Post = {
    id : String ; 
    date : string ; 
    title : string ; 
    views : number ; 
    viewsFormatted : string ; 
} ; 
// shape of HSET in redis 
type Views ={
    [key:string]:string ; 
} ; 

export const getPosts = async  ()=>{
    const allViews : null|Views = await  redis.hgetall("views") ; 
    const posts = postsData.posts.map((post):Post =>{
            const views = Number(allViews?.[post.id] ?? 0)
            return {
              ...post,
              views,
              viewsFormatted: commaNumber(views),
            } ; 

    }) ; 
    return posts ; 
}

