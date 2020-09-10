const Blog = require('./models/Blog'),
    faker = require('faker');

function seedDb() {


    Blog.deleteMany({}, (err, blogs) => {
        if (err) {
            console.log(err);
        } else {
            console.log("all blogs deleted");
            // for (let i = 0; i < 3; i++) {
            //     let image = faker.image.imageUrl();
            //     let description = faker.lorem.paragraph();
            //     let newBlog = { image: image, description: description };
            //     Blog.create(newBlog, (err, blog) => {
            //         if (err) {
            //             console.log(err);
            //         } else {
            //             console.log("Blog Added.........");
            //             // console.log(blog);
            //         }
            //     });

            // }
        }
    });
}


module.exports = seedDb;
