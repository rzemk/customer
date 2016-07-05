/* eslint-disable new-cap, array-callback-return, no-console */
import express from 'express';
const router = module.exports = express.Router();
import Bank from '../models/bank';

router.get('/', (req, res) => {
  Bank.find((err, banks) => {
    console.log('banks get all', err);
    res.send({ banks });
  });
});

router.get('/:id/balance', (req, res) => {
  Bank.findById(req.params.id, (err, account) => {
    console.log('banks get id', err);
    res.send({ balance: account.balance });
  });
});

router.post('/new', (req, res) => {
  console.log('banks new', req.body);
  const account = new Bank(req.body);
  account.save((err) => {
    console.log('banks new err', err);
    res.send({ account });
  });
});

router.put('/:id/withdraw', (req, res) => {
  console.log('banks put withdraw balance', req.body.balance);
  Bank.findByIdAndUpdate(req.params.id, { balance: req.body.balance }, (err, account) => {
    console.log('banks put withdraw err', err);
    res.send({ balance: req.body.balance });
  });
});

router.put('/:id/deposit', (req, res) => {
  console.log('banks put deposit balance', req.body.balance);
  Bank.findByIdAndUpdate(req.params.id, { balance: req.body.balance }, (err, account) => {
    console.log('banks put deposit err', err);
    res.send({ balance: req.body.balance });
  });
});
