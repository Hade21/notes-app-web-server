const {
    addNoteHandler,
    getNote,
    getNotebyId,
    updateNotebyId,
    deleteNotebyId,
} = require("./handler.js");

const routes = [{
        method: "POST",
        path: "/notes",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler: getNote,
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNotebyId,
    },
    {
        method: "PUT",
        path: "/notes/{id}",
        handler: updateNotebyId,
    },
    {
        method: "DELETE",
        path: "/notes/{id}",
        handler: deleteNotebyId,
    },
];

module.exports = routes;