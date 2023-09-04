export default function PaginationButton({pagenum, id}){
  return(
    <button id={id} className="pagination-button">
      {pagenum}
    </button>
  )
}