import "../../assets/css/createNote.css"
import { useForm} from 'react-hook-form'
import {useNotes} from '../../context/noteContext'

export const CreateNote = () => {

  const {register , handleSubmit}=useForm();
  const {addNotes} = useNotes();


  const onSubmit = handleSubmit((data)=>{
    addNotes(data)
  })


  return (
    <div className="general__crear">
      <div className="crear">
        <form className="items" onSubmit={onSubmit}>
          <h2 className="crear__h1">Create a Note</h2>
          <input className="crear__input" type="text"  placeholder="Name" {...register("name")} />
          <input className="crear__input" type="text" placeholder="Title" {...register("title")}/>
          <textarea className="crear__input--textarea" rows="4" cols="50" placeholder="Content" {...register("info")}></textarea>
          <input className="crear__input crear__input-date" type="date"{...register("date")} />
          <button className="crear__button">Save</button>
        </form>
      </div>
    </div>
  )
}
