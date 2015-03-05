var doT = require('dot');// soap templar
//
module.exports = function(soap, data) {
  return  doT(soap)(data);
};
