const {
  addoneBooks,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addoneBooks,
  },

  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBookById,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookById,
  },
];

module.exports = routes;
