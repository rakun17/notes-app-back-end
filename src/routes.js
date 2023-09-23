/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

const { addNoteHandler } = require('./handler');

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

module.exports = routes;