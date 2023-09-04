import PaginationButton from "./PaginationButton"

export default function Pagination(){
  
  return (
    <div className="pagination">
      <PaginationButton id={"arrow"} pagenum={"<<"}/>
      <PaginationButton pagenum={1}/>
      <PaginationButton pagenum={2}/>
      <PaginationButton pagenum={3}/>
      <PaginationButton pagenum={"…"}/>
      <PaginationButton pagenum={5}/>
      <PaginationButton  id={"arrow"} pagenum={">>"}/>
    </div>       
 
  )
}