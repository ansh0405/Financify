// controllers/investmentController.js
const Investment = require('../models/Investment');

exports.createInvestment = async (req, res) => {
    try {
        const investment = new Investment(req.body);
        await investment.save();
        res.status(201).json(investment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getInvestments = async (req, res) => {
    try {
        const investments = await Investment.find({ userId: req.params.userId });
        res.json(investments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
