const {
    addNoteHandler,
    getNote,
    getNotebyId,
    updateNotebyId,
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
];

module.exports = routes;