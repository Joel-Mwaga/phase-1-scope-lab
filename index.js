// Write your solution in this file!
var customerName = 'bob';
var upperCaseCustomerName = () => {
  customerName = customerName.toUpperCase();
}
var setBestCustomer = () => {
  bestCustomer = 'not bob';
}
var overwriteBestCustomer = () => {
  bestCustomer = 'maybe bob';
}
var changeLeastFavoriteCustomer = () => {
  leastFavoriteCustomer = 'new customer'; // This will throw an error
}
const leastFavoriteCustomer = 'bob';
var attemptTwoFavoriteCustomers = () => {
    let favoriteCustomer = 'bob';
    // let favoriteCustomer = 'not bob'; // Uncommenting this will throw an error
}

