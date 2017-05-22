angular.module('starter.services', [])

.factory('Products', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
 var productList=null;

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },set:function(res){
		for (var i = 0; i < res.rows.length; i++)
		{
			productList.push({ProductName: res.rows.item(i).ProductName});
			}
		productList=productlist;
		},
    get: function() {
      return productList;
    }
  };
});
