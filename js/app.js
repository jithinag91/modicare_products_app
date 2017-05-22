// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

// just to show a nice output for this demo


var debug=true;

var originalConsoleLog = console.log.bind(console);
console.log = function (str) {
	if(debug==false)
	{return;}
  originalConsoleLog(str);
  display.innerHTML += str + '\n';
  
};
var global_res=null;
global_db=null;
var resultsArray=[];

ionicApp=angular.module('starter', ['ionic','ngCordova']);

ionicApp.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: '/tab',abstract:true,
    templateUrl: '/templates/tabs.html'
  })
  .state('tab.products', {
    url: '/products',
    views: {
      'tab-products': {
        templateUrl: '/templates/tab-products.html'
        //,controller: 'DashCtrl'
      }
    }
  }).state('tab.state2', {
    url: '/state2',
    views: {
      'tab-state2': {
        templateUrl: 'state2.html'
        //,controller: 'DashCtrl'
      }
    }
  }).state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html'
        //,controller: 'DashCtrl'
      }
    }
  });
 

  $urlRouterProvider.otherwise('/tab/products');
});
/*
ionicApp.controller("DashCtrl", function($scope) {
	$scope.setNavTitle = function(title) {
   $ionicNavBarDelegate.title(title);
}
	});
*/

ionicApp.run(function ($ionicPlatform,$cordovaSQLite) {
 $ionicPlatform.ready(function() {




    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

	//dbfunction was here

  });
});


ionicApp.controller("tableData", function($scope,$ionicPlatform) {
	//Products.set(gobal_res);
 $scope.results=[];
  $ionicPlatform.ready(function() {
	  console.log("table data controller device ready =");
	  
	 
	  

    function copyDatabaseFile(dbName) {

      var sourceFileName = cordova.file.applicationDirectory + 'www/' + dbName;
      var targetDirName = cordova.file.dataDirectory;

      return Promise.all([
        new Promise(function (resolve, reject) {
          resolveLocalFileSystemURL(sourceFileName, resolve, reject);
        }),
        new Promise(function (resolve, reject) {
          resolveLocalFileSystemURL(targetDirName, resolve, reject);
        })
      ]).then(function (files) {
        var sourceFile = files[0];
        var targetDir = files[1];
        return new Promise(function (resolve, reject) {
          targetDir.getFile(dbName, {}, resolve, reject);
        }).then(function () {
          console.log("file already copied");
        }).catch(function () {
          console.log("file doesn't exist, copying it");
          return new Promise(function (resolve, reject) {
            sourceFile.copyTo(targetDir, dbName, resolve, reject);
          }).then(function () {
            console.log("database file copied");
          });
        });
      });
    }
  
    copyDatabaseFile('modicare_products.db').then(function () {
      // success! :)
        
       var db2 = sqlitePlugin.openDatabase('modicare_products.db');
     global_db=db2;
      db2.readTransaction(function (txn) {
         
        txn.executeSql('SELECT * FROM modicare_products', [], function (tx, res) {
         console.log('Successfully read from pre-populated DB:');

				gobal_res=res;
          var table="";
         var tr="";
 

         console.log(JSON.stringify(res.rows.item(0))+"\n");

            if(res.rows.length > 0) {
        // //     // console.log("SELECTED -> " + res.rows.item(0).name + " " + res.rows.item(0).amount);
             for (var i=0; i<res.rows.length; i++) {
              
                  tr+="<tr>";
                    tr+="<td>"+res.rows.item(i).SN+"</td>";
                  // tr+="<td>"+res.rows.item(i).ProductCode+"</td>";
                  tr+="<td>"+res.rows.item(i).ProductName+"</td>";
                  tr+="<td>"+res.rows.item(i).Pack+"</td>";
                  tr+="<td>"+res.rows.item(i).MRP+"</td>";
                  tr+="<td>"+res.rows.item(i).DP+"</td>";
                  tr+="<td>"+res.rows.item(i).BV+"</td>";
                  tr+="</td>";
                
                 resultsArray.push(res.rows.item(i));
                



             }//for loop
$scope.results=resultsArray;
              console.log("resultsArray ready");
             // angular.element(document.getElementById('app')).scope().init();



             th="<tr><td>SN</td><td>ProductName</td><td>Pack</td><td>MRP</td><td>DP</td><td>BV</td></tr>";
             
             // console.log("<table>"+th+tr+"</table>"); 



        } else {
            console.log("No results found");
        }
 
              
		console.log("select completed");
        });//select 
       
		console.log("transation completed");
      });//transaction
     
	//opendb
    }).catch(function (err) {
      // error! :(
      console.log(err);
    });
     
    
    
    
	 // console.log("resultarray"+JSON.stringify(resultsArray));
	  
	  
	  
	  });

console.log("tableData controlller");
  
});/*.controller('productSearch', function($scope) {
	
	
	
	});*/
