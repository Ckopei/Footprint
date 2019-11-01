import axios from "axios";

export default {
  // Gets all books
  getScore: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  updateScore: function(id) {
    return axios.put("/api/books/" + id);
  }
};
