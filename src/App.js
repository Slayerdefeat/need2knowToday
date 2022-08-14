import React,{useState} from 'react'
import Nav from './compo/Nav'
import News from './compo/News'

function App() {

  const [mode,setMode]=useState("light")
  const [finalize,setFinalize]=useState("")
const [categ,setCateg]=useState([
  "all","entertainment","national","business","science","technology","hatke","automobile","sports","startup","politics","world","miscellaneous"
])
const val=(n)=>{
  console.log(n)
  setFinalize(n)

  
}

  const moding=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
      // document.body.style.Color="white"

    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      // document.body.style.Color="black"
    }
  }
  return (
<>

<Nav moding={moding} mode={mode} categ={categ} val={val}/>

    <News mode={mode} key={finalize?finalize:"all"} category={finalize?finalize:"all"}/>
  

{/* <Route path="/" mode={mode}element={<News mode={mode} category="all"/>}/> */}
{/* <Routes>
<Route path="/" element={<News mode={mode} key="all"category="all"/>}/>
<Route path="/entertainment"element={<News mode={mode} key="national" category="entertainment"/>}/>

<Route path="/national"element={<News mode={mode} key="national" category="national"/>}/>
<Route path="/business"element={<News mode={mode} key="business" category="business"/>}/>
<Route path="/science"element={<News mode={mode}  key="science"category="science"/>}/>
<Route path="/technology"element={<News mode={mode} key="technology" category="technology"/>}/>
<Route path="/hatke"element={<News mode={mode} key="hatke" category="hatke"/>}/>
<Route path="/automobile"element={<News mode={mode} key="automobile" category="automobile"/>}/>
<Route path="/sports"element={<News mode={mode} key="sports" category="sports"/>}/>
<Route path="/startup"element={<News mode={mode} key="startup" category="startup"/>}/>
<Route path="/politics"element={<News mode={mode} key="" category="politics"/>}/>
<Route path="/world"element={<News mode={mode} key="world" category="world"/>}/>
<Route path="/miscellaneous"element={<News mode={mode} key="world" category="miscellaneous"/>}/>








</Routes> */}

</>
    )
}

export default App