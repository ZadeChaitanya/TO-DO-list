
import { RiDeleteBin2Fill } from "react-icons/ri";
export default function TodoItem ({ work, date ,handleDeleteBtn}) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h6 className='mt-4'> {work}</h6>
        </div>
        <div className='col-4'>
          <h6 className='mt-4'>{date}</h6>
        </div>

        <div className='col-2'>
          <button className='btn btn-danger ps-3 pe-3 mt-3 ' onClick={()=>handleDeleteBtn(work)} ><RiDeleteBin2Fill /></button>
        </div>
      </div>
    </div>
  )
}
