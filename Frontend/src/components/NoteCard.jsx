
import { Edit2, Trash2 } from "lucide-react";
import api from "../libs/axios";
import { Link } from "react-router-dom";
import { formatDate } from "../libs/utils";
import toast from "react-hot-toast";

const NoteCard = ({note, setNotes}) => {


  const deleteNote = async (e, id) => {
     e.preventDefault()
  if(!window.confirm("You really want to delete this note??")) return
     
    try {
       
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");

    } catch (error) {
      console.log("Error deleting note", error);
      toast.error("Failed deleting note!");
    }
  }


  return (
    <Link to={`/${note._id}`} className="card h-60 rounded-2xl max-w-96 bg-[#011e30] border-black border-t-2 border-t-blue-300 shadow-black shadow-2xl">
      <div className="card-body gap-4">
               
        <h1 className="card-title capitalize text-2xl font-semibold">
        {note.title}
        </h1>

        <p className="text-lg text-base-content/70 line-clamp-4">
         {note.content}        
        </p>

        <div className="card-actions justify-between pt-2">
            <div className="pt-1">
            <p className="text-sm">{formatDate(new Date(note.createdAt))}</p>
            </div>
            <div>
            <button className="btn btn-sm btn-ghost text-info hover:bg-info/10">
            <Edit2 size={16} />
            Edit
            </button>
            <button onClick={(e)=>(deleteNote(e,note._id))} className="btn btn-sm btn-ghost text-error hover:bg-error/10">
            <Trash2 size={16} />
            Delete
            </button>
            </div>          
          
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;

