export default [
    {
        id: 1,
        title: "Account Balance",
        code: "*737*6*1#",
        dial: "*737*6*1#",
        description: "Check your account balance"
    },
    {
        id: 2,
        title: "Airtime Recharge",
        code: "*737*Amount*MobileNumber#",
        dial: false,
        description: "Recharge your mobile phone or other numbers"
    },
    {
        id: 3,
        title: "Fund Transfer",
        code: "*737*1*Amount*RecipientAccountNumber#",
        dial: false,
        description: "Transfer funds to other GTBank accounts"
    },
    {
        id: 4,
        title: "Transfer to Other Banks",
        code: "*737*2*Amount*RecipientAccountNumber#",
        dial: false,
        description: "Transfer funds to other Nigerian banks"
    },
    {
        id: 5,
        title: "Merchant Payment",
        code: "*737*3*Amount*MerchantCode#",
        dial: false,
        description: "Pay bills for various services"
    },
    {
        id: 6,
        title: "One Time Password (OTP) Generation",
        code: "*737*7#",
        dial: "*737*7#",
        description: "Generate an OTP for online transactions"
    }
];
