let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb');
var ObjectID = require('mongodb').ObjectID;
let path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true });
        let db = await client.db("personal_blog");
        await operations(db);
        client.close();
    } catch (error) {
        res.status(500).send({ message: "Error in connecting db", error });
    }
}

app.get("/api/personalinfo", async (req, res) => {
    withDB(async (db) => {
        let personalInfo = await db.collection("personal_info").findOne();
        res.status(200).json(personalInfo)
    }, res);
});

app.get("/api/technologies", async (req, res) => {
    withDB(async (db) => {
        let technologies = await db.collection("technologies").findOne();
        res.status(200).json(technologies)
    }, res);
});

app.get("/api/experiences", async (req, res) => {
    withDB(async (db) => {
        let experiences = await db.collection("experiences").find({}).toArray();
        res.status(200).json(experiences)
    }, res);
});

app.get("/api/achievements", async (req, res) => {
    withDB(async (db) => {
        let achievements = await db.collection("achievements").find({}).toArray();
        res.status(200).json(achievements)
    }, res);
});

app.get("/api/educationdetails", async (req, res) => {
    withDB(async (db) => {
        let educationDetails = await db.collection("education_information").find({}).toArray();
        res.status(200).json(educationDetails)
    }, res);
});

app.get("/api/articles", async (req, res) => {
    withDB(async (db) => {
        let articles = await db.collection("articles").find({}).toArray();
        res.status(200).json(articles);
    });
})

app.get("/api/article/:name", async (req, res) => {
    const articleId = req.params.name;

    withDB(async (db) => {
        let articles = await db.collection("articles").findOne({ _id: ObjectID(articleId) });
        let relatedArticles = await db.collection("articles").find({ _id: { $ne: ObjectID(articleId) } }).toArray();
        res.status(200).json({ articles, relatedArticles });
    });
})

app.post("/api/add-article", async (req, res) => {
    const { article_title, article_content } = req.body;

    withDB(async (db) => {
        await db.collection('articles').insertOne({ article_title: article_title, article_content: article_content, comments: [] });
        const articles = await db.collection("articles").find({}).toArray();
        const response = { statusCode: 200, message: "Article added successfully.", articles }
        res.status(200).json(response);
    });
});

app.post("/api/article/:name/add-comment", async (req, res) => {
    const { username, comment } = req.body;
    const articleId = req.params.name;
    
    withDB(async (db) => {
        let articleInfo = await db.collection("articles").findOne({ _id: ObjectID(articleId) });
        await db.collection('articles').updateOne({ _id: ObjectID(articleId) }, {
            $set: {
                comments: articleInfo.comments.concat({ username, comment })
            }
        });

        const updateInfo = await db.collection("articles").findOne({ _id: ObjectID(articleId) });
        res.status(200).json(updateInfo);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(8000, () => console.log("Listen port 8000"));
