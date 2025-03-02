


const PortofolioList = ({title ,active, setSeleted,id}) => {
  return (
    <div>
     <li className={active ? "list-port active" : "list-port"} onClick={()=> setSeleted(id)}>{title}</li>
    </div>
  )
}

export default PortofolioList
