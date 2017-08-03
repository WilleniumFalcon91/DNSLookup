const dns = require('dns');
const options = {
    family: 6, 
    hints: dns.ADDRCONFIG | dns.V4MAPPED, 
};

dns.lookup('yahoo.com', options, (err, address, family) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('address: %j family: IPv%s', address, family);
    }
options.all = true;
dns.lookup('yahoo.com', options, (err, addresses) => 
    console.log('addresses: %j', addresses));
});