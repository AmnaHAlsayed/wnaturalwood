const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51Jy0sVLjRsySDg5ttWus4Z5BBIvjMoK4mpoWvpcLlAJe2wuFkeMTuOOr7HisjMX3tphUUtPFD4FNipenwDtxAa3d00FQla5a3F"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "AED",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;