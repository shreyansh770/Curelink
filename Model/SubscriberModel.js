const mongoose = require('mongoose');

let {
    db_link
} = require("../secrets");

mongoose.connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("subscriber model connected");
}).catch((err) => {
    console.log(err);
})

const subSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    topics: {
        subto: [{
            type: String
        }]
    },

    role:{
        type:String,
        enum : ["Admin","User"]
    }

})

const subModel = mongoose.model("subModel",subSchema);

module.exports = subModel;