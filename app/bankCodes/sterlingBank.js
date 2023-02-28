export default [
    {
        id: 1,
        title: "Account Balance",
        code: "*822*6#",
        dial: "*822*6#",
        description: "Check your Sterling Bank account balance"
    },
    {
        id: 2,
        title: "Airtime Recharge",
        code: "*822*Amount#",
        dial: false,
        description: "Recharge airtime on your phone"
    },
    {
        id: 3,
        title: "Transfer",
        code: "*822*Amount*Account Number#",
        dial: false,
        description: "Transfer money to another Sterling Bank account"
    },
    {
        id: 4,
        title: "Buy Data",
        code: "*822*Amount*Phone Number#",
        dial: false,
        description: "Buy data for your phone"
    },
    {
        id: 5,
        title: "Pay Bills",
        code: "*822*Amount*Merchant Code#",
        dial: false,
        description: "Pay bills such as electricity and cable TV"
    }
];
