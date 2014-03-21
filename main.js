Nodetime = Npm.require('nodetime');
if(process.env.NODETIME_ACCOUNT_KEY) {
  Nodetime.profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
  });
}
