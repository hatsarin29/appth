
var app = angular.module('myApp',[]);

app.controller("serviceCtrl",function($scope){
    $scope.serviceList = {
        "list" : [
            { "stitle" : "service-icon-1.png",  "sdetail" : "EASY TO USE",  "spicture" : "111orem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod tepo raraincididunt ugt labore."},
            { "stitle" : "service-icon-2.png",  "sdetail" : "AWESOEM DESIGN",  "spicture" : "222orem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod tepo raraincididunt ugt labore."},
            { "stitle" : "service-icon-3.png",  "sdetail" : "EASY TO CUSTOMAIZE",  "spicture" : "3333orem ipsum dolor sit amt, consectet adop adipisicing elit, sed do eiusmod tepo raraincididunt ugt labore."},
            { "stitle" : "service-icon-2.png",  "sdetail" : "AWESOEM DESIGN",  "spicture" : "สวัสดีครับบ."},
            { "stitle" : "service-icon-3.png",  "sdetail" : "HATSARIN",  "spicture" : "ICT.PMPAE."},
            { "stitle" : "service-icon-1.png",  "sdetail" : "PMCOM",  "spicture" : "ง่วงนอนโว้ยๆๆๆ"}
           
        ]
    }
});

app.controller("featureList",function($scope,$http){
    $http.get("getdata.php")
    .then(function(respone){ 
        $scope.featureList = respone.data.list;
        console.log($scope.featureList);
    }, function(respone){ 
        console.log(respone.statusText);
    });
});



