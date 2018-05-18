'use strict'

exports.neohash = function(inputhash) {



	var resout = 'beginning resout';

	const neoscrypt = require("./neoscrypt.js");

	var Hash = module.exports;

	const buf2 = Buffer.from(inputhash,'hex');

	var outbuf = Buffer.alloc(32,'','hex')


	  	function hashnow(callback) {
	    var buf = neoscrypt._malloc(buf2.length*buf2.BYTES_PER_ELEMENT);
	    neoscrypt.HEAPU8.set(buf2, buf);

	    console.log("input buffer length: \n" + (buf2.length*buf2.BYTES_PER_ELEMENT));

	    var neoBytes = outbuf.length * outbuf.BYTES_PER_ELEMENT;
	    var neoptr = neoscrypt._malloc(neoBytes);
	    var heapBytes = new Uint8Array(neoscrypt.HEAPU8.buffer, neoptr, neoBytes);
	    heapBytes.set(new Uint8Array(outbuf.buffer));

	    console.log("output buffer length: \n" + (outbuf.length*outbuf.BYTES_PER_ELEMENT));

	    console.log("input hash: \n" + buf2.toString('hex'));


	    neoscrypt.ccall('hash', 'null', ['number','number'], [buf,heapBytes.byteOffset]);
	    var res = new outbuf.constructor(heapBytes.buffer, heapBytes.byteOffset, outbuf.length);
		neoscrypt._free(heapBytes.byteOffset);

		for (var i = 0, j = res.length - 1; i < j; ++i, --j) {
		    var t = res[j];

		    res[j] = res[i];
		    res[i] = t;
		  }


		 resout = res.toString('hex');
		callback();

	
		return(resout);
		}


function printit(){

}
return(hashnow(printit));


};













