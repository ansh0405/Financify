// controllers/expenseController.js
const Expense = require('../models/Expense');

exports.createExpense = async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.status(201).json(expense);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.params.userId });
        res.json(expenses);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

