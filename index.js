'use strict';

var soap = require('soap');

function Linnworks(){};
Linnworks.GENERIC_API = 'http://api.linnlive.com/Generic.asmx?wsdl';
Linnworks.INVENTORY_API = 'http://api.linnlive.com/Inventory.asmx?wsdl';
Linnworks.ORDER_MANAGEMENT_API = 'http://api.linnlive.com/Order.asmx?wsdl';
Linnworks.PURCHASE_ORDER_API = 'http://api.linnlive.com/PurchaseOrder.asmx?wsdl';

module.exports = {
    generic: getSOAPClient(Linnworks.GENERIC_API),
    inventory: getSOAPClient(Linnworks.INVENTORY_API),
    orderManagement: getSOAPClient(Linnworks.ORDER_MANAGEMENT_API),
    purchaseOrder: getSOAPClient(Linnworks.PURCHASE_ORDER_API)
};

function getSOAPClient(url) {
  return function(callback) {
    soap.createClient(url, function(error, client) {
      callback && callback(error, client);
    });
  };
}
