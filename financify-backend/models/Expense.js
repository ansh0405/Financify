// models/Expense.js
const mongoose = require('mongoose');
const ExpenseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    description: String,
    amount: Number,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Expense', ExpenseSchema);
