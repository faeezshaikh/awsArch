angular.module('starter')


.controller('chatController',function($scope,$state,$window,$firebaseAuth){
	
		var chatRef = new Firebase('https://daughertyapp.firebaseio.com/');
		var auth = $firebaseAuth(chatRef);
		$scope.msg = "Initializing chat..";
		$scope.date = new Date();
		
		$scope.login = function(socialPlatform) {
			$scope.loginProgress = true;
			auth.$authWithOAuthPopup(socialPlatform).then(function(authData) {
			    console.log("Logged in as:", authData.uid);
			    $scope.loggedIn = true;
				$scope.loginProgress = false;
			  }).catch(function(error) {
				  console.log("Authentication failed:", error);
			      $scope.loginProgress = false;
			      console.log(error);
			      $scope.msg = "";
			      $( "#firechat-wrapper" ).effect( "shake",{times:4},1000 );
			  });
		}
		
		$scope.logout = function() {
			chatRef.unauth();
			$scope.msg = "Signing out of chat..";
			$scope.loggedIn = false;
			$scope.loginProgress = true;
			$state.go('app.topics'); // adding this for device.. location.href doesnt work on device
			$window.location.reload();
			
		}
		auth.$onAuth(function(authData) {
		  // Once authenticated, instantiate Firechat with our user id and user name
		  if (authData) {
			  $scope.loginProgress = false;
			  $scope.loggedIn = true;
			  if(authData.provider == 'facebook') {
				  $scope.userName = authData.facebook.displayName;
				  $scope.userImg = authData.facebook.profileImageURL;
				  $scope.userEmail = authData.facebook.email; // Email works only if user has exposed.
			  }
			  if(authData.provider == 'twitter') {
				  $scope.userName = authData.twitter.displayName;
				  $scope.userImg = authData.twitter.profileImageURL;
				  $scope.userEmail = authData.twitter.email;
			  }
			  if(authData.provider == 'google') {
				  $scope.userName = authData.google.displayName;
				  $scope.userImg = authData.google.profileImageURL;
				  $scope.userEmail = authData.google.email;
			  }
			  var chat = new FirechatUI(chatRef, angular.element(document.querySelector('#firechat-wrapper')));
			  chat.setUser(authData.uid, authData[authData.provider].displayName);
		  }
		});
		
})

;
