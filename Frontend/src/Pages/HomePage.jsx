import React, { useEffect, useState } from 'react'
import api from '../libs/axios';
import RateLimitedUI from '../components/isRateLimitedUI';
import { toast } from "react-hot-toast"
import NotesNotFound from "../components/noteNotFound"
import NoteCard from '../components/NoteCard';
import Navbar from '../components/Navbar';

    const Homepage = () => {
        const [ loading , setLoading ] = useState(true);
        const [ notes, setNotes ] = useState([]);
        const [ isRateLimited, setRateLimited ] = useState(false);

        useEffect(()=>{
            const getNotes = async () => {
                try {
                    const res = await api.get('/notes')
                    console.log(res.data);
                    setNotes(res.data.notes);
                    setRateLimited(false)
                } catch (error) {
                    console.log("Error loading notes.", error);
                    if(error.response?.status === 429){
                        setRateLimited(true)
                        toast.error("Too many requests! try again later.")
                    } else {
                        toast.error("Can't load notes!")
                    }
                }
                finally{
                    setLoading(false)
                }
            }
            getNotes()
        },[])
   return (
  <div>
    <Navbar/>
    {isRateLimited && <RateLimitedUI/>}
    {notes.length === 0 && !isRateLimited && (
        <div>
            <NotesNotFound/>
        </div>
    )}
    {loading && !isRateLimited && (
        <div className='mx-auto text-xl font-bold mt-52 text-center'>
            Loading notes...
        </div>
    )}

    {notes.length > 0 && !isRateLimited && (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-auto  lg:max-w-6xl max-w-3xl gap-5 gap-y-8 mt-12'>
        {notes.map((note) => <NoteCard key={note._id} note={note} setNotes={setNotes}/>)}
        </div>
    )}
  </div>
);

    }

    export default Homepage
