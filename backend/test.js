const bcrypt = require('bcrypt');
const saltRounds = 10;
const pass = "testpassword"
let hash

console.log('before hashing: '+pass)

bcrypt.hash(pass, saltRounds, function(err, hash) {
	console.log('after hashing: '+hash)
	hash = hash
	console.log('recovering pass from hash...')
	bcrypt.compare(pass, hash, function(err, res) {
	    console.log('pass and hash match: '+ res)
	});
});
