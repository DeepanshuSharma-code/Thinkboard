import { Note } from "../models/notes.model.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !title.trim()) {
      return res.status(406).json({
        message: "Please provide a title!",
      });
    }

    if (!content || !content.trim()) {
      return res.status(406).json({
        message: "Please provide a content!",
      });
    }

    const note = await Note.create({
      title: title.trim(),
      content: content.trim(),
    });

    return res.status(201).json(note);

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error creating note!",
    });
  }
};


export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    if (!notes) {
      res.status(404).json({
        message: "Error Fetching Notes!",
      });
    }
    res.status(200).json({
      message: "Note fetched successfully.",
      notes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error.",
      error,
    });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      res.status(404).json({
        message: "Can't find Note with this ID!",
      });
    }
    res.status(200).json({
      message: "Note fetched successfully.",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error.",
      error,
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content });
    if (!updatedNote) {
      res.status(404).json({
        message: "Can't find note with this ID!",
      });
    }
    res.status(200).json({
      message: "Note updated successfully.",
      updatedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      res.status(404).json({
        message: "Can't find note with this ID!",
      });
    }
    res.status(200).json({
      message: "Note deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
