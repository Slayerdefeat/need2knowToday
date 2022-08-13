import React from 'react'

function Newsitem(props) {
    const {title,author,publish,time,link,img,mode}=props;
  return (

    <div className={`card my-2 mx-2 bg-${mode} text-${mode==="light"?"dark":"light"} border border-${props.mode==="light"?"dark":"primary"}`} style={{width: "18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:"1",left:"90%"}}>
        {author}
  </span>
  <img src={img} className="card-img-top" height={150}alt="..."/>
  <div className="card-body">
    <strong>

    <h5 className="card-title">{title}</h5>
    <p className={`card-text text text-${mode==="light"?"dark":"warning"}`}>{publish},{time}</p>
    </strong>


    <a href={link} target="_blank" rel="noreferrer"  className={`btn my-2 btn-outline-${mode==="light"?"dark":"success"}`}>Read More</a>
  </div>
</div>
  )
}

export default Newsitem