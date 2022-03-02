const { nanoid } = require("nanoid");
const notes = require("./notes");

const addNoteHandler = (request, h) => {
    const { title, tags, body } = request.payload;

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNotes = {
        id,
        title,
        createdAt,
        updatedAt,
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
const getNotebyId = (request, h) => {
    const { id } = request.params;
    const note = notes.filter((note) => note.id === id)[0];

    if (note !== undefined) {
        return {
            status: "success",
            data: {
                note,
            },
        };
    }
    const response = h.response({
        status: "fail",
        message: "catatan tidak ditemukan",
    });
    response.code(404);
    return response;
};
const updateNotebyId = (request, h) => {
    const { title, tags, body } = request.payload;

    const { id } = request.params;
    const updatedAt = new Date().toISOString();

    const index = notes.findIndex((n) => n.id === id);

    if (index != -1) {
        notes[index] = {
            ...notes[index],
            title,
            updatedAt,
            tags,
            body,
        };
        const response = h.response({
            status: "success",
            message: "catatan berhasil disimpan",
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "catatan gagal disimpan, id tidak ditemukan",
    });
    response.code(404);
    return response;
};

const deleteNotebyId = (request, h) => {
    const { id } = request.params;

    const index = notes.findIndex((note) => note.id === id);

    if (index !== -1) {
        notes.splice(index, 1);
        const response = h.response({
            status: "success",
            message: "catatan berhasil dihapus",
        });
        response.code(200);
        return response;
    }
    const response = h.response({
        status: "fail",
        message: "Catatan gagal dihapus, id tidak ditemukan",
    });
    response.code(404);
    return response;
};

module.exports = {
    addNoteHandler,
    getNote,
    getNotebyId,
    updateNotebyId,
    deleteNotebyId,
};