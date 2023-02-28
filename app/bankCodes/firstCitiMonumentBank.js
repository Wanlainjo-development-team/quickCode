export default [
    {
        id: 1,
        title: "Account Balance",
        code: "*329*0#",
        dial: "*329*0#",
        description: "Check your account balance"
    },
    {
        id: 2,
        title: "Transfer to FCMB Accounts",
        code: "*329*Amount*AccountNumber#",
        dial: false,
        description: "Transfer funds to other FCMB accounts"
    },
    {
        id: 3,
        title: "Transfer to Other Banks",
        code: "*329*Amount*AccountNumber#",
        dial: false,
        description: "Transfer funds to other Nigerian banks"
    },
    {
        id: 4,
        title: "Buy Airtime",
        code: "*329*Amount#",
        dial: false,
        description: "Recharge your mobile phone or other numbers"
    },
    {
        id: 5,
        title: "Pay Bills",
        code: "*329*2*Amount*MerchantCode#",
        dial: false,
        description: "Pay bills for various services"
    },
    {
        id: 6,
        title: "Cardless Withdrawal",
        code: "*329*Amount#",
        dial: false,
        description: "Withdraw cash from an ATM without your card"
    }
];
