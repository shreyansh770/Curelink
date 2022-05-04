const mongoose = require('mongoose');

let {
    db_link
} = require("../secrets");

mongoose.connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("content model connected");
}).catch((err) => {
    console.log(err);
})


const contentSchema = mongoose.Schema({

    topic: {
        type: "String",
        required: true,
        enum: ['Sports', 'Entertainment', 'Current Affairs', 'News', 'Astrology']
    },

    content: {
        type: String,
        required: true,

    },

    time: {
        type: String,
    }

    // this will automatically store the time when an object is created in the schema

})

contentSchema.pre('save', function (next) {
    this.time = Math.round(new Date().getTime()/1000);
    next()
})

const contentModel = mongoose.model('contentModel', contentSchema);

module.exports = contentModel;