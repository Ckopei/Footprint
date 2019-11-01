import axios from "axios";

export default {
  // Gets all books
  getScore: function() {
    return axios.get("/api/users/score")
    .then(function (res){
      console.log(res)
    });
  },
  // Gets the book with the given id
  updateScore: function(id) {
    return axios.get("/api/users/update/" + id);
  }
};
