const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.static("./images"));
app.use(express.static("./styles"));

app.get("/", (req, res) => {
  let movies = [
    { poster: "/book1.avif",title: "Vikrant Rona",  genere: "Adventure/Mystery/Thriller"},
    { poster: "/book2.avif", title: "Lal Singh Chaddha", genere: "Drama/Comedy/Romantic" },
    { poster: "/book3.avif", title: "Bimbisara", genere: "Action/Drama/Period" },
    { poster: "/book4.avif", title: "Sita Ramam", genere: "Action/Drama/Romantic" },
    { poster: "/book5.avif", title: "Raksha Bandhan", genere: "Comedy/Drama/Family" },
  ];
  let joas=[{pos:"/chaos.avif"},{pos:"/chaos2.avif"},{pos:"/chaos3.avif"},{pos:"/chaos4.avif"},{pos:"/chaos5.avif"}]
  let last=[{post:"/cha1.avif"},{post:"/cha2.avif"},{post:"/cha3.avif"},{post:"/cha4.avif"},{post:"/cha5.avif"}]
  res.render("home",{movies,joas,last});
});
app.listen(3000, () => {
  console.log("listening at port no 3000");
});
