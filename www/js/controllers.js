
/*angular.module('starter.controllers', [])
*/

ionicApp.controller('productSearch', function($scope) {
	$scope.results=[];
	$scope.results=resultsArray;
	//$scope.productList=Products.get();
	//console.log('product serach resultsArray='+JSON.stringify(resultsArray));
	//$scope.getproductlist();
	
	
	$scope.getproductlist=function(){
		$scope.results=resultsArray;
		
		console.log('getproductlist'+resultsArray);
		//sqlitePlugin.openDatabase('modicare_products.db');
	
		
	//var db = sqlitePlugin.openDatabase('modicare_products.db');
			console.log("db="+global_db);
			
                //  global_db
                /*
                   global_db.readTransaction(function (txn) {
                    txn.executeSql('SELECT * FROM modicare_products', [], function (tx, res) {
						
						  var table="";
         var tr="";

						//console.log(JSON.stringify(res.rows.item(0))+"\n");

            if(res.rows.length > 0) {
        // //     // console.log("SELECTED -> " + res.rows.item(0).name + " " + res.rows.item(0).amount);
             for (var i=0; i<res.rows.length; i++) {
             
                //console.log("data->"+$scope.allSessions);

                 // console.log(JSON.stringify(res.rows.item(i))+"\n");

                  tr+="<tr>";
               

                  tr+="<td>"+res.rows.item(i).SN+"</td>";
                  // tr+="<td>"+res.rows.item(i).ProductCode+"</td>";
                  tr+="<td>"+res.rows.item(i).ProductName+"</td>";
                  tr+="<td>"+res.rows.item(i).Pack+"</td>";
                  tr+="<td>"+res.rows.item(i).MRP+"</td>";
                  tr+="<td>"+res.rows.item(i).DP+"</td>";
                  tr+="<td>"+res.rows.item(i).BV+"</td>";
                  tr+="</td>";
                
                  $scope.results.push({ProductName: res.rows.item(i).ProductName});
                



             }//for loop

              gobal_res=res;
             // angular.element(document.getElementById('app')).scope().init();



             th="<tr><td>SN</td><td>ProductName</td><td>Pack</td><td>MRP</td><td>DP</td><td>BV</td></tr>";
             // console.log("<table>"+th+tr+"</table>"); 
		
				console.log("res="+JSON.stringify(res.rows.item(0)));
				$scope.productList=['a','b','c','d','aa','bb'];
        } else {
            console.log("No results found");
        }

						
						
	$scope.productList=['a','b','c','d','aa','bb'];
	//$scope.productList=$scope.results;
				
				
				
				});
				
				
				});
				*/
				
				
			//	$scope.productList=['a','b','c','d','aa','bb'];
				$scope.productList=resultsArray;
			}//getproducts
			
			
			$scope.init=function(){
		$scope.getproductlist();
		//$scope.productList=['a','b','c','d','aa','bb'];
		//$scope.productList=global_res;
		
		}
		
	
		$scope.$on('$ionicView.loaded', function(){
    console.log('ionic loaded');      
  });
		$scope.$on('$ionicView.afterEnter', function(){
    console.log('ionic after enter');      
  });
			$scope.$on('$ionicView.beforeEnter', function(){
    console.log('ionic before enter global_res='+JSON.stringify(global_res));  
    
  });

			//init();
	});
	
/*
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});*/
