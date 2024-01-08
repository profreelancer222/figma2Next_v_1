const job = require("../models/job");
const isEmpty = require("is-empty");

const postJob = async (req, res) => {
    try {
        const {
            companyName,
            managerName,
            email,
            address,
            city,
            state,
            zip,
            salaryAmount,
            customerSupport,
            createdDate,
            expirationDate,
        } = req.body;
        if (isEmpty(companyName) || isEmpty(managerName) || isEmpty(email) || isEmpty(address) || isEmpty(city) || isEmpty(state) || isEmpty(zip) ||  isEmpty(salaryAmount) ||  isEmpty(customerSupport) || isEmpty(createdDate) || isEmpty(expirationDate)) {
            return res.sendStatus(400);
        }
        await job.create({
            companyName,
            managerName,
            email,
            address,
            city,
            state,
            zip,
            salaryAmount,
            customerSupport,
            createdDate,
            expirationDate,
        });
        return res.sendStatus(201);
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }
}

module.exports = {postJob}