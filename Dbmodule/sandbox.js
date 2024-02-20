const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blackcoffer = new Schema({
    _id: {
        type: String,
        required: true
    },
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
},{
    timestamps: true
});

module.exports = mongoose.model('BlackcofferTests', blackcoffer);
