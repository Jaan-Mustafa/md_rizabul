import redis from "../../redis";
import postsData from "../../posts.json" ; 
import commaNumber from "comma-number" ; 
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { P } from "../../../reference/app/(post)/components/p";


export async function GET(req:NextRequest){
    console.log("hi this is from inside ") ; 
    // this code is to ? 
    const url = new URL(req.url) ; 
    const id= url.searchParams.get("id")??null ; 
    if(id==null){
      return NextResponse.json(
        {
          error: {
            message: 'Missing "id" query',
            code: "MISSING_ID",
          },
        },
        { status: 400 }
      )
    }

    const post= postsData.posts.find(post=>post.id===id) ; 
    // jo req me id he wo as a paremter aayi hogi . 

    if(post==null){
            return NextResponse.json(
              {
                error: {
                  message: "Unknown post",
                  code: "UNKNOWN_POST",
                },
              },
              { status: 400 }
            )

    }

    if(url.searchParams.get("incr")!=null){
        // paramteer me incr bhi he yaani posts ko increasing order me show karna he
        // this is to increase the view 
        const views= await redis.hincrby("views" , id , 1) ; 
        return NextResponse.json({
            ...post , views , viewsFormatted:commaNumber(views) , 
        }) ; 


    }else{

        const views = (await redis.hget("views" , id)) ??0 ; 
        return NextResponse.json({
            ...post , 
            views , viewsFormatted:commaNumber(Number(views)) , 
        })

    }




}