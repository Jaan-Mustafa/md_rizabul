import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

// next js way to get data from db , 
export const dynamic = "force-dynamic" ; 
// dynamic is important for fetching data from redis 

export async function GET(){
    // get Posts function is fetching data from db 
    return  NextResponse.json(await getPosts()) ; 
}