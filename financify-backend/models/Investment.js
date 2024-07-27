// models/Investment.js
const mongoose = require('mongoose');
const InvestmentSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    suggestion: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Investment', InvestmentSchema);
