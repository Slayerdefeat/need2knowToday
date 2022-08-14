import React from 'react'
import { useState,useEffect } from 'react';
import Newsitem from './Newsitem';
import Spin from './Spin';

function News(props) {

const [d,setData]=useState(
[])
const [loader,setLoader]=useState(false)


const [categ,setCateg]=useState(props.category)


    const fetcher=async()=>{

    let  url=`https://inshorts.deta.dev/news?category=${categ}`
    setLoader(true)
const send= await fetch(url)
setLoader(true)

const receiver=await send.json()
setLoader(false)


setData(receiver.data)


// console.log(receiver.data)


  }

  useEffect(()=>{
    


    fetcher()
    document.title=`Need2KnowToday-${categ}`
      },[categ])


  
function capitalize(n){
  let g=n.toLowerCase();
  let v=g.charAt(0).toUpperCase() + g.slice(1,)
  return v;
}
  return (
<>


<h1 className={`text-center my-4  text-${props.mode==="light"?"dark":"warning"}`}>{capitalize(props.category)} News</h1>
<div className="container ">

{
    loader &&
    <Spin/>
  }
<div className="row justify-content-md-center">
  {
    d.map((ele)=>{
      return (

        <div className=" col" key={ele.id}>
        <Newsitem mode={props.mode}title={ele.title?ele.title:"No Title"}time={ele.time?ele.time:""} publish={ele.date?ele.date:""} img={ele.imageUrl?ele.imageUrl:"noimg.jpg"} link={ele.readMoreUrl?ele.readMoreUrl:"https://www.inshorts.com/en/news"} author={ele.author?ele.author:"Not Reveal"}/>
  

  </div>
      )
    })
  }

</div>
  
</div>

</>  )
}

export default News