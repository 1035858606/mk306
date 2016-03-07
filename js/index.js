var json = {name:["丁","佳","宇","敲","代","码"]};
var app = angular.module('mk', ['ui.router']);

app.controller('mkzs', function($scope) {
    $scope.Name = json.name[0];
    // 路由响应
    $scope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams){
    
        main()
        
    });

});


//路由
// app.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {  
//     var locationChangeStartOff = $rootScope.$on('$locationChangeStart', locationChangeStart);  
//     var locationChangeSuccessOff = $rootScope.$on('$locationChangeSuccess', locationChangeSuccess);  
  
//     var routeChangeStartOff = $rootScope.$on('$routeChangeStart', routeChangeStart);  
//     var routeChangeSuccessOff = $rootScope.$on('$routeChangeSuccess', routeChangeSuccess);  
  
//     function locationChangeStart(event) {  
 
//     }  
  
//     function locationChangeSuccess(event) {  

//     }  
  
//     function routeChangeStart(event) {  

//     }  
  
//     function routeChangeSuccess(event) {  
      
//     }  
// }]);  
// app.run(function(){ $rootScope.$on('$stateChangeStart', function(){
//     alert()
// }) })


app.config(function ($stateProvider, $urlRouterProvider) {

//当页面什么的都没有的时候，加载pageTab这个东西
	$urlRouterProvider.when("", "/PageTab");
	$stateProvider

//	PageTab 是那个页面
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "page/OneLeavePage.html"
        })
        .state("PageTab.Page1", {
            url:"/Page1",
            templateUrl: "page/pageTap.html"
        })
        .state("PageTab.Page2", {
            url:"/Page2",
            templateUrl: "page/p2.html"
        })
        .state("PageTab.Page3", {
            url:"/Page3",
            templateUrl: "page/p3.html"
        })
        .state("PageTab.Page4", {
            url:"/Page4",
            templateUrl: "page/p4.html"
        })
        .state("PageTab.Page5", {
            url:"/Page5",
            templateUrl: "page/p5.html"
        })
        .state("PageTab.Page6", {
            url:"/Page6",
            templateUrl: "page/p6.html"
        })
        .state("PageTab.Page7", {
            url:"/Page7",
            templateUrl: "page/p7.html"
        })
        .state("PageTab.Page8", {
            url:"/Page8",
            templateUrl: "page/p8.html"
        })
        .state("PageTab.Page9", {
            url:"/Page9",
            templateUrl: "page/p9.html"
        })


//  PageTabs 是那个页面
        .state("PageTab.Page1.P1", {
            url: "/P1",
            templateUrl: "page/twopage/p1.html"
        })
        .state("PageTab.Page1.P2", {
            url:"/P2",
            templateUrl: "page/twopage/p2.html"
        })
        .state("PageTab.Page1.P3", {
            url:"/P3",
            templateUrl: "page/twopage/p3.html"
        })
        .state("PageTab.Page1.P4", {
            url:"/P4",
            templateUrl: "page/twopage/p4.html"
        })
        .state("PageTab.Page1.P5", {
            url:"/P5",
            templateUrl: "page/twopage/p5.html"
        })
        .state("PageTab.Page1.P6", {
            url:"/P6",
            templateUrl: "page/twopage/p6.html"
        })

});