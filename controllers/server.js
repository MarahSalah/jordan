const express = require("express");
const app = express();
const db = require(`../models/config`);
const port = 8080;
app.use(express.json());

app.get('/home', async (req, res) => {
    try {
      let result = await db.query('SELECT users.user_name, blogs.blog_id, blogs.blog_title, blogs.image, blogs.place_name, blogs.place_location FROM users INNER JOIN blogs ON users.user_id = blogs.the_user;');
      res.json(result.rows);
    } 
    catch (err) {
      console.error(err);
      res.status(500).send('error in get the home');
    }
  });

app.post('/addBlog', async (req, res) => {
    const { blog_title, blog_description, the_user, image, place_name, place_location } = req.body;
    try {
        const query = `
            INSERT INTO blogs (blog_title, blog_description, the_user, image, place_name, place_location)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING blog_id`;
        const values = [blog_title, blog_description, the_user, image, place_name, place_location];

        const result = await db.query(query, values);
        const newBlogId = result.rows[0].blog_id;
        res.status(201).json({ message: 'Blog added successfully', blog_id : newBlogId });
    } catch (error) {
        console.error('Error adding blog:', error);
        res.status(500).json({ error: 'Failed to add the blog' });
    }
});


app.get('/getblog/:id', async(req, res) => {
    try{
        const query = 'select * from blogs where blog_id = $1';
        const blogId = req.params.id;
        const result = await db.query(query, [blogId]); 
        res.json(result.rows);
    }catch (error){
        console.error('Failed to get one blog: ', error);
        res.status(500).json({ error: 'Failed to get one blog'});
    }
})
//delete
//   app.delete('/delete/:id', async (req, res) => {
//       const id = req.params.id;
//       try {
//         const query = 'DELETE FROM blogs WHERE id = $1';
//         const result = await db.query(query, [id]);
//         if (result.rowCount === 1) {
//           res.json({ message: 'Record deleted successfully' });
//         } else {
//           res.status(404).json({ message: 'Record not found' });
//         }
//       } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       }
//   });

app.listen(port, () => {
    console.log(`server running in port ${port}`);
})