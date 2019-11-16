import axios from "axios";
export default {

  getUser: function(username) {
    return axios.get("/api/test/" + username)
  },

  updateScore: function(user) {
    return (
      axios.put("/api/test/", user)
    )
  },

  getScrape: function(){
    return (
      axios.get("/api/scrape/")
    )
  },

  showArticles: function(){
    return(
      axios.get("/api/scrape/articles/")
    )
  }

};
