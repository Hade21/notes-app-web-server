const { addNoteHandler, getNote } = require("./handler.js");

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
];

module.exports = routes;