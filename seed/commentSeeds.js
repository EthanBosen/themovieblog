const Comment = require('../models/Comment')



const commentData = [
    {
        id: 1,
        content: 'This reminds me of my family and my childhood. Damn what does that say abt us...lol.',
        user_id: 3,
        movie_id: 1,
    },
    {
        id: 2,
        content: 'WTF. My faith in humanity is shaken. I will never watch this again. great movie though',
        user_id: 1,
        movie_id: 6,
    },
    {
        id: '3',
        content: "Thought abt just writing gibberish here but really couldn't bring myself to do it",
        user_id: 5,
        movie_id: 7
    },
    {
        id: 4,
        content: 'Here was another opportunity for gibberish which i sorely reret not taking',
        user_id: 3,
        movie_id: 8
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
