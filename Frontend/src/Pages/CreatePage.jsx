// import React, { useEffect, useState } from 'react'
// import api from '../libs/axios';
// import toast from 'react-hot-toast';
// import { MoveLeft } from 'lucide-react';
// import { Link } from 'react-router';

// const CreatePage = () => {
//     const [ title, setTitle ] = useState("");
//     const [ content, setContent ] = useState("");
//     const [ loading, setLoading ] = useState(false);

//         const createNote = async (event) => {
//           event.preventDefault()

//             if(!title.trim() || !content.trim()){
//                 toast.error("All fields are required!");
//                 return
//             }

//             setLoading(true)
//             try {
//                 await api.post('/add', {title, content})
//             } catch (error) {
//                 console.log("Error creating Note", error);
//                 if(error.response?.status === 429){
//                     toast.error("Slow down! You're creating notes too fast", {
//                       duration: 4000,
//                       icon: "💀",
//                     })
//                 }  else {
//                     toast.error('Error Creating note!');
//                 } 
//             } finally{
//                     setLoading(false)
//                 }
//         }
//   return (
//     <div className="min-h-screen">

//   <div className="w-full max-w-3xl mx-auto mt-24 bg-[#011e30] border-t-2 border-t-blue-300 rounded-2xl shadow-black shadow-2xl p-10">

//     {/* Back */}
//     <Link to={"/"} className="text-gray-300 flex items-center gap-3 cursor-pointer hover:text-white transition">
//       <MoveLeft size={20} />
//       Back to notes
//     </Link>

//     {/* Form */}
//     <form onSubmit={createNote} className="mt-8 grid gap-6">

//       <div className="grid gap-2">
//         <label className="text-gray-300 text-sm">Title</label>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(event)=> setTitle(event.target.value)}
//           className="bg-[#001a2a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid gap-2">
//         <label className="text-gray-300 text-sm">Content</label>
//         <textarea
//           rows="4"
//           placeholder="Write your content here..."
//           value={content}
//           onChange={(event)=> setContent(event.target.value)}
//           className="bg-[#001a2a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="flex justify-end mt-4">
//         <button type='submit' className="btn btn-info px-8 rounded-3xl" disabled={loading}>
//           { loading ? "Creating..." : "Create Now"  }
//         </button>
//       </div>

//     </form>
//   </div>
// </div>

//   )
// }

// export default CreatePage


import React, { useState } from 'react';
import api from '../libs/axios';
import toast from 'react-hot-toast';
import { MoveLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createNote = async (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      await api.post('notes/add', { title, content });
      toast.success("Note created!");
      navigate("/");
    } catch (error) {
      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Error creating note!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-3xl mx-auto mt-24 bg-[#011e30] border-t-2 border-t-blue-300 rounded-2xl shadow-2xl p-10">

        {/* Back */}
        <Link to="/" className="text-gray-300 flex items-center gap-3 hover:text-white transition">
          <MoveLeft size={20} />
          Back to notes
        </Link>

        {/* Form */}
        <form onSubmit={createNote} className="mt-8 grid gap-6">

          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-[#001a2a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-gray-300 text-sm">Content</label>
            <textarea
              rows="4"
              placeholder="Write your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-[#001a2a] border border-white/10 rounded-xl px-4 py-3 text-white resize-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button type="submit" className="btn btn-info px-8 rounded-3xl" disabled={loading}>
              {loading ? "Creating..." : "Create Now"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreatePage;
