import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Home/Navbar";
import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";


const ReadMore = () => {
    const {id} =useParams()

    const cards =useLoaderData();
    console.log(cards)

    const [readMore,SetReadMore] =useState({});

    useEffect(()=>{
        const showCard = cards?.find((card)=>card.id==id);
        SetReadMore(showCard)
    },[id,cards])

    return (
        <div>
             <Navbar></Navbar>
            <div>
               
                <CardDetails readMore={readMore}></CardDetails>
            </div>
           <div>
          
           </div>
        </div>
    );
};

export default ReadMore;