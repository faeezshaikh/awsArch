Publishing:
http://ionicframework.com/docs/guide/publishing.html

sudo cordova build --release android

(Already generated - do not lose - If Key not already present)
keytool -genkey -v -keystore  awsArch-key.keystore -alias awsArch- -keyalg RSA -keysize 2048 -validity 100000

cp /Users/faeezshaikh/git/homeautomation/platforms/android/build/outputs/apk/android-release-unsigned.apk .

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore android-release-unsigned.apk awsArch-

C:\Users\FSHAI\AppData\Local\Android\android-sdk\build-tools\23.0.1\zipalign -v 4 android-release-unsigned.apk AWS-Certified-Arch.apk
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk AWS-Certified-Arch.apk


---------------------

ANDROID SCREENSHOTS
---------------------
1. Start Genymotion Emulator --> Custom Phone
2. sudo ionic run android (This will install the apk on the genymotion emulator).
3. For Screenshots, Android Studio --> (Android Device monitor) DDMS --> Select emulator --> Camera icon.

(Optional)
 Start Android Virtual Device from AVD manager (either standalone or from android studio)
Android Studio --> Android device monitor

On Mac:
/Users/faeezshaikh/Library/Android/sdk/platform-tools/adb install

2. Install the apk in the emulator using this command:
~/Android/~platform-tools/adb install yourfile.apk


-----------------
IOS SCREENSHOTS
-----------------

1. sudo ionic build ios
2. Run in emulator using this command: (Replace .app file)

	ios-sim launch /Users/faeezshaikh/git/awsArch/platforms/ios/build/emulator/AWS-Arch.app -devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-6s -cls
	
3. Take screenshots from emulator
4. Use launchkit.io for appstore images	

For iPad pro screenshots
5. https://www.storeshots.net/apps/edit/2187


----
TIPS
-----

ionic platform remove ios
ionic platform add ios


sudo chmod -R a+rw ios/


Remove from Info.plist file

 <key>CFBundleIconFile</key>
    <string>icon.png</string>


Twitter app
apps.twitter.com
thecloudinstitute1@gmail.com/Posidon745

---------------------------
To add Chat module: Start 
---------------------------

1. Import js and css files in CSS

<!-- Socail Login styling start -->
  	<link href="lib/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
  	<link href="lib/bootstrap/dist/css/bootstrap-theme.min.css.map" rel="stylesheet">
  	
  	<link href="lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  	<link href="lib/bootstrap/dist/css/bootstrap.min.css.map" rel="stylesheet">
  	
 	Copy the fonts folder with css folder too.
    <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="lib/font-awesome/css/font-awesome.css.map" >
    <link href="css/bootstrap-social.css" rel="stylesheet">
    
    <!-- Socail Login styling end -->


 <!-- Firebase auth -->
		  <script src="lib/firebase/firebase.js"></script>
	  	  <script src="lib/angular-fire/angularfire.min.js"></script>
  	  
  	  <!-- Social login button styling -->
		  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
		  <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  
		  <script src="lib/bootstrap/dist/js/bootstrap.min.js"></script>
		  <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	  
	 <!-- Firechat -->
		<link rel='stylesheet' href='https://cdn.firebase.com/libs/firechat/2.0.1/firechat.min.css' />
		<script src='https://cdn.firebase.com/libs/firechat/2.0.1/firechat.min.js'></script> 
   
   
2. Inject ‘firebase’ in app.js angular module.
3. Add Chat controller.
4. Add chat.html
5. Two files: bootstrap-social.css and chatbubbles2.svg
6. Add chat state in app.js
7. Install this plugin in project
cordova plugin add org.apache.cordova.inappbrowser
8.  Change otherwise state  to following:∂
9. // this is due to the chatUI widget with hyperlinks, so if anytime other than the first login a link is clicked go to chat			
10. $urlRouterProvider.otherwise(function($injector, $location)
11. 				   var state = $injector.get('$state');
12. 				   if(state.current.name == '') {
13. 					   state.go('app.playlists');
14. 				   }
15. 				   else {
16. 					   state.go('app.chat');
17. 				   }
18. 				   return $location.path();
19. 				});

---------------------------
To add Chat module: End 
---------------------------




Jquery Circle Progress from here:
http://ignitersworld.com/lab/radialIndicator.html

Next Release
/*
,
    {
        "Id": 56,
        "Name": "Which of the following requires a custom CloudWatch metric to monitor?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Disk full percentage of an Elastic Block Store volume.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Disk usage activity of the ephemeral volumes of an Amazon EC2 instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Disk usage activity of an Elastic Block Store volume attached to  an Amazon EC2 instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CPU utilize of an Amazon EC2 instance.", "IsAnswer": false }]
    },
    {
        "Id": 57,
        "Name": "You are currently hosting multiple applications in a VPC and have logged numerous port scans coming in from a specific IP address block. Your security team has requested that all access from the offending IP address block be denied tor the next 24 hours. Which of the following is the best method to quickly and temporarily deny access from the specified IP address block?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP address block", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add a rule to all of the VPC 5 Security Groups to deny access from the IP address block.", "IsAnswer": false }]
    },
    {
        "Id": 58,
        "Name": "An application that you are managing has EC2 instances & DynamoDB tables deployed to several AWS Regions In order to monitor the performance of the application globally, you would like to see two graphs: 1) Avg CPU Utilization across all EC2 instances and 2) Number of Throttled Requests for all DynamoDB tables. How can you accomplish this?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Tag your resources with the application name,and select the tag name as the dimension in the CloudWatch Management Console to view the respective graphs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the CloudWatch CLI tools to pull the respective metrics from each regional endpoint. Aggregate the data offline & store it for graphing in CloudWatch.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add SNMP traps to each instance and DynamoDB table Leverage a central monitoring server to capture data from each instance and table. Put the aggregate data into Cloud Watch for graphing.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add a CloudWatch agent to each instance and attach one to each DynamoDB table. When configuring the agent set the appropriate application name & view the graphs in CloudWatch.", "IsAnswer": false }]
    },
    {
        "Id": 59,
        "Name": "In Identity and Access Management, when you first create a new user, certain security credentials are automatically generated. Which of the below are valid security credentials?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Access Key ID, Authorized Key", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Private Key, Secret Access Key", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Private Key, Authorized Key", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Access Key ID, Secret Access Key", "IsAnswer": true }]
    },
    {
        "Id": 60,
        "Name": "Your organization's security policy requires that all privileged users either use frequently rotated passwords or one-time access credentials in addition to username/password. Which two of the following options would allow an organization to enforce this policy for AWS users? Choose 2 answers", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure multi-factor authentication for privileged IAM users", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create IAM users for privileged accounts", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement identity federation between your organization's Identity provider leveraging the IAM Security Token Service", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enable the IAM single-use password policy option for privileged users", "IsAnswer": false }]
    }*/