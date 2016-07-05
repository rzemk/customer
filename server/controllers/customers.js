/* eslint-disable new-cap, array-callback-return, no-console */
import express from 'express';
const router = module.exports = express.Router();
import Customer from '../models/customer';

router.get('/', (req, res) => {
  Customer.find((err, customers) => {
    console.log('customers get all', err);
    res.send({ customers });
  });
});

router.get('/:id', (req, res) => {
  Customer.findById(req.params.id, (err, person) => {
    console.log('customers get id', err);
    res.send({ person });
  });
});

router.post('/new', (req, res) => {
  console.log('customers - new', req.body);
  const person = new Customer(req.body);
  person.save((err) => {
    console.log('customers new err', err);
    res.send({ person });
  });
});
