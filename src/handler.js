const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updateAt = createdAt;

    const newNotes = {
        id,
        title,
        createdAt,
        updateAt,
        tags,
        body,
    };
    notes.push(newNotes);

    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "catatan berhasil ditambahkan",
            data: {
                noteId: id,
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "catatan gagal ditambahkan",
    });
    response.code(500);
    return response;
};

const getNote = () => ({
    status: "success",
    data: {
        notes,
    },
});

module.exports = { addNoteHandler, getNote };