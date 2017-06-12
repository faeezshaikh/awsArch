{
    "quiz": {
        "Id": 100,
        "name": "Practice Exam 1",
        "logo" : "data/img/exam.jpg"
    },
    "questions": [{
        "Id": 1,
        "Name": "Which of the following is not true:", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "It is possible to have private subnets in VPC", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You may only have 1 internet gateway per VPC", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A subnet can be associated with multiple Access Control Lists", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "In Amazon VPC, an instance retains its private IP", "IsAnswer": false }]

    },
    {
        "Id": 2,
        "Name": "The max number of VPCs allowed in each AWS region is :", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": true }]
        
    },
   {
        "Id": 3,
        "Name": "How many internet gateways can you attach to a VPC?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "2", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "5", "IsAnswer": false }]
    },
     {
        "Id": 4,
        "Name": "A corporate web application is deployed within an Amazon VPC, and is connected to the corporate data center via IPSec VPN. The application must authenticate against the on-premise LDAP server. Once authenticated, logged-in users can only access an S3 keyspace specific to the user. Which approach cannot satisfy the objectives?", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The application authenticates against LDAP. The application then calls the IAM Security Service to login to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM Role. The application can use the temporary credentials to access the appropriate S3 bucket.  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Develop an identity broker which authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.", "IsAnswer": false }]
    },
     {
        "Id": 5,
        "Name": "S3 stands for :", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Security Storage Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Secured Storage Service", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Simple Storage Service", "IsAnswer": true }]

    },
    {
        "Id": 6,
        "Name": "You attempt to store an object in the US East (Northern Virginia) Region (formerly US-STANDARD region) in Amazon S3, and receive a confirmation that it has been successfully stored. You then immediately make another API call and attempt to read this object. S3 tells you that the object does not exist. What could explain this behavior? ", 

        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "US East (Northern Virginia) Region uses eventual consistency and it can take time for an object to be readable in a bucket. ", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Objects in Amazon S3 do not become visible until they are replicated to a second region. ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "US East (Northern Virginia) Region imposes a 1 second delay before new objects are readable", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You exceeded the bucket object limit, and once this limit is raised the object will be visible. ", "IsAnswer": false }]

    },
    {
        "Id": 7,
        "Name": "You are hosting a static website in an S3 bucket which uses Javascript to reference assets in another S3 bucket. For some reason however these assets are not displaying when users browse to the site. What could be the problem?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You cannot use one S3 bucket to reference another S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3 does not support Javascript  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "You haven't enabled Cross Origin Resource Sharing (CORS) on the bucket where the assets are stored.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "You need to open port 80 on the appropriate security group in which the S3 bucket is located.", "IsAnswer": false }]

    },
     {
        "Id": 8,
       "Name": "Your application is trying to upload a 6 GB file to Simple Storage Service and receive a 'Your proposed upload exceeds the maximum allowed object size.' error message. What is a possible solution for this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Contact support to increase your object size limit", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the large object upload API for this object  ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the multi-part upload API for this object ", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "None, Simple Storage Service objects are limited to 5 GB ", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Upload to a different region ", "IsAnswer": false }]

    },
    {
        "Id": 9,
        "Name": "What is the HTTP code you would see if once you successfully place a file in an S3 bucket?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "3xx", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "200", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "5xx", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "4xx", "IsAnswer": false }]
        
    },
     {
        "Id": 10,
       "Name": "You run an ad-supported photo sharing website using S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store photos on an EBS volume of the web server", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Block the IPs of the offending websites in Security Groups.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use CloudFront distributions for static content", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Remove public read access and use signed URLs with expiry dates.", "IsAnswer": true }]
        
    },
     {
        "Id": 11,
      "Name": "For downloading private data directly from S3, you can insert a pre-signed URL into a web page before giving it to your users.",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 12,
        "Name": "A newly created S3 bucket is public by default:",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": true }]
        
    },
     {
        "Id": 13,
       "Name": "Domain, Workers, Deciders are associated with which of the following AWS services?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Lambda", "IsAnswer": false }]
        
    },
     {
        "Id": 14,
         "Name": "Maintaining your application’s execution state (ie. which steps have completed, which ones are running, etc.) is a use case for which AWS service?.",    
        "Options": [
           { "Id": 1055, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SQS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "SWF", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3", "IsAnswer": false }]
        
    },
     {
        "Id": 15,
       "Name": "What is a worker with respect to SWF?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Workers are programs that interact with Amazon SWF to get tasks, process received tasks, and return the results.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Workers are EC2 instances which can create S3 buckets and process SQS messages.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workers are the people in the warehouse processing orders for Amazon", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Workers are a component of IIS which run on windows platform under the w3wp.exe process.", "IsAnswer": false }]
        
    },
     {
        "Id": 16,
       "Name": "_______ allows you to deliver static and video content over edge locations.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "HTTP", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "SDS", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "CloudFront CDN", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "SNS", "IsAnswer": false }]
        
    },
     {
        "Id": 17,
           "Name": "One EC2 instance can have these many Elastic IPs (per ENI) assigned to it:",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "10 ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "15", "IsAnswer": false }]
        
    },
     {
        "Id": 18,
       "Name": "Your organization has decided to move its entire data warehouse of 20 TB to the AWS cloud. What service would you recommend that would be the most time and cost effective for this purpose?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Megaupload Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon Import/Export", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Streaming API", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Fulfilment Service", "IsAnswer": false }]
        
    },
     {
        "Id": 19,
       "Name": "Your current architecture stack consists of 3 EC2 instances, one load balancer, 1 route53, 5 S3 buckets and CloudFront CDN for content delivery for your offices in New York. Your company would like to quickly replicate this architecture for its Middle East offices, closer to that region. What would you suggest?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Using the AWS SDK for Java write a program that will replicate the stack in another region.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Hire AWS certified staff in the Middle East offices to create a similar stack in another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use CloudFormation JSON templates to quickly replicate the stack in another region..", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "You would have to manually create similar instances and other entities in another region.", "IsAnswer": false}]
        
    },
     {
        "Id": 20,
      "Name": "SWF provides consistent execution and ongoing visibility at each task level",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 21,
       "Name": "Amazon does not allow you to scan port under any circumstance, even on your own account?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True. This violates AWS security policy.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "False. Customers may request permission to conduct vulnerability scans to meet their specific compliance requirements.", "IsAnswer": true}]
        
    },
     {
        "Id": 22,
       "Name": "AWS provides Ingress/Egress filtering on all incoming and outgoing data traffic.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False. VPC cannot support this.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True. VPC supports firewall solution enabling filtering on both ingress & egress instance traffic", "IsAnswer": true}]
        
    },
     {
        "Id": 23,
       "Name": "AWS provides DOS protection on the network layer as part of the shared security model.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "True", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "False", "IsAnswer": false }]
        
    },
     {
        "Id": 24,
       "Name": "What is the best way to move an EBS volume to another availability zone?",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Import / Export.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Backup to S3 and then restore data from S3 to another region.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a snapshot of the volume and then create a volume based off the snapshot in the new availability zone.", "IsAnswer": true },
              { "Id": 1058, "QuestionId": 1010, "Name": "Submit a request to Amazon with a snapshot of the volume to be moved.", "IsAnswer": false }]
        
    },
     {
        "Id": 25,
       "Name": "You can attach one EBS volume to more than one instance at one time.",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": false }]
        
    },
     {
        "Id": 26,
       "Name": "One single EC2 instance can have multiple EBS volumes attached to it.",  
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "False", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "True", "IsAnswer": true }]
        
    },
     {
        "Id": 27,
       "Name": "Company B provides an online image recognition service and utilizes SQS to decouple system components for scalability. The SQS consumers poll the imaging queue as often as possible to keep endto-end throughput as high as possible. However, Company B is realizing that polling in tight loops is burning CPU cycles and increasing costs with empty responses. How can Company B reduce the number of empty responses?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Set the imaging queue VisibilityTimeout attribute to 20 seconds ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set the imaging queue MessageRetentionPeriod attribute to 20 seconds ", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Set the DelaySeconds parameter of a message to 20 seconds  ", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Set the imaging queue ReceiveMessageWaitTimeSeconds attribute to 20 seconds ", "IsAnswer": true}]
        
    },
     {
        "Id": 28,
     "Name": "EC2 instances are launched from Amazon Machine Images (AMIs). A given public AMI:",    
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same country as the AMI is stored ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "can be used to launch EC2 instances in any AWS region ", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS region as the AMI is stored", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "can only be used to launch EC2 instances in the same AWS availability zone as the AMI is stored", "IsAnswer": false }]
        
    },
     {
        "Id": 29,
      "Name": "You have reached your account limit for the number of CloudFormation stacks in a region. How do you increase your limit?",   
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Make an API call ", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Contact AWS ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the console ", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You cannot increase your limit ", "IsAnswer": false }]
        
    },
     {
        "Id": 30,
      "Name": "Which statements about DynamoDB are true? (Pick 2 correct answers)",  
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "DynamoDB uses a pessimistic locking model", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "DynamoDB uses optimistic concurrency control", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "DynamoDB uses conditional writes for consistency", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "DynamoDB restricts item access during reads", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "DynamoDB restricts item access during writes", "IsAnswer": false }]
        
    },
     {
        "Id": 31,
       "Name": "You have written a CloudFormation template that creates 1 elastic load balancer fronting 2 EC2 instances. Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack.", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Resources", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Parameters", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Outputs", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Mappings", "IsAnswer": false}]

    },
     {
        "Id": 32,
       "Name": "You have just added a linux based bastion host to the default VPC and have verified that it was assigned a public IP address.  You want to permit ssh access to this host only from your corporate location at ip address 172.21.8.19.  Which of the following will have this affect?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add an inbound rule to the default security group for port 22, UDP, with source 172.21.8.19/32", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Add an inbound rule to the default security group for port 22, TCP, with source 172.21.8.19/32", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Add an inbound rule to the nACL on the bastion's subnet, port 22, UDP, with source 172.21.8.19/32", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Add an inbound rule to the nACL on the bastion's subnet, port 22, TCP, with source 172.21.8.19/0", "IsAnswer": false}]

    },
     {
        "Id": 33,
       "Name": "Amazon Glacier is designed for? (Choose 2 answers)", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Frequently accessed data", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Active database storage", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Infrequently accessed data", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Cached session data", "IsAnswer": false},
            { "Id": 1059, "QuestionId": 1010, "Name": "Data archives", "IsAnswer": true}]

    },
     {
        "Id": 34,
       "Name": "You have a business-critical two-tier web app currently deployed in two Availability Zones in a single region, using Elastic Load Balancing and Auto Scaling. The app depends on synchronous replication (very low latency connectivity) at the database layer. The application needs to remain fully available even if one application Availability Zone goes off-line, and Auto Scaling cannot launch new instances in the remaining Availability Zones. How can the current architecture be enhanced to ensure this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Deploy in three Availability Zones, with Auto Scaling minimum set to handle 33 percent peak load per zone.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Deploy in three Availability Zones, with Auto Scaling minimum set to handle 50 percent peak load per zone.", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 50 percent peak load per Region.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Deploy in two regions using Weighted Round Robin (WRR), with Auto Scaling minimums set for 100 percent peak load per region.", "IsAnswer": false}],
            
            "explanation" : "ELB cannot balance load across regions (only across AZs within the same region), so the two options with 'Deploying in two regions' can be eliminiated. If there are currently 3 AZs and if one AZ goes down and autoscaling is not working, then the load should be distributed equally among the remaining 2 AZs. Hence set it to handle a minimum of 50% load per zone. Another way to look at this is if there were 3 AZs with Autoscaling set to handle 33% per zone, then if one AZ goes down then the remaining 2 AZs will handle only 33+33 - 66% of the load. Hence the correct option is Deploy in 3 AZs with autoscaling set to 50% per AZ.",
            "ref":"https://aws.amazon.com/elasticloadbalancing/"

    },
     {
        "Id": 35,
       "Name": "You have been tasked with creating a VPC network topology for your company. The VPC network must support both Internet-facing applications and internally-facing applications accessed only over VPN. Both Internet-facing and internally-facing applications must be able to leverage at least three AZs for high availability.  At a minimum, how many subnets must you create within your VPC to accommodate these requirements?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "2", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "3", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "4", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "6", "IsAnswer": true}]

    },
     {
        "Id": 36,
       "Name": "For which of the following AWS services will you be billed or charged?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Autoscaling", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Elastic Beanstalk", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Elastic Load Balancers", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Cloud Formation", "IsAnswer": false}]

    },
     {
        "Id": 37,
       "Name": "You have set up and Autoscaling group with a maximum capacity of 50 AWS EC2 instances in us-east-1 under a single AWS root account. Under load however the Autoscaling group only spins up 20 EC2 instances. What is the likely cause?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Autoscaling has a hard limit of 20 EC2 instances", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Since you did not specify , Autoscaling group defaults to 20 EC2 instances.", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "The Autoscaling group desired capacity is set to 20, hence it stopped after 20 instances.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "You have exceeded the default Amazon EC2 instance limit of 20 per region", "IsAnswer": true}]

    },
     {
        "Id": 38,
       "Name": "Under which circumstances will AWS EC2 instance store data not be preserved?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The associated security groups are changed.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "The instance is stopped or rebooted.", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "The instance is rebooted or terminated.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "The instance is stopped or terminated.", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "None of the above.", "IsAnswer": false}],
            
            "explanation" : "The data in an instance store persists only during the lifetime of its associated instance. If an instance is stopped or terminated then the instance store does not persist. Rebooting the instance does not shut down the instance. If an instance reboots (intentionally or unintentionally) data on the instance store persists. Security groups have nothing to do with the lifetime of an instance and have no effect here.",
            "ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html"

    },
     {
        "Id": 39,
       "Name": "CyberFlicks Corp. provides Streaming access to videos to authenticated users around the world. Which of the following is the best way to accomplish this?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use AWS S3 (Simple Storage Service) in each region with website hosting enabled", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Store the videos on AWS Elastic Block Storage (EBS) volumes.", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable Amazon CloudFront with geolocation and signed URLs", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "Run a fleet of EC2 instances to host the videos", "IsAnswer": false}],
            
            "explanation" : "CloudFront provides the best user experience by delivering data from a geographically advantageous edge location. Signed URLs allow you to control access to authenticated users.",
            "ref":"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html"

    },
     {
        "Id": 40,
       "Name": "For high durability purposes, how is data strored in Amazon S3?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data is automatically replicated to other regions", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Data is automatically replicated to different Availability Zones within a region.", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Data is replicated only if versioning is enabled on the bucket", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Data is automatically backed up on tape and restored if needed", "IsAnswer": false}],
            
            "explanation" : "AWS never replicates data between regions unless directed by user. AWS does not use tapes.",
            "ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/crr-what-is-isnot-replicated.html"

    },
     {
        "Id": 41,
       "Name": "S3 is an eventually consistent storage system. For what kinds of operations is it possible to get stale data as a result of eventual consistency?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "GET after PUT of a new object", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "GET after DELETE", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "GET after overwrite PUT (PUT to an existing key)", "IsAnswer": true},
            { "Id": 1058, "QuestionId": 1010, "Name": "DELETE after GET of new object", "IsAnswer": false}],
            
            "explanation" : "S3 provides read-after-write consistency for PUTs to new objects (new key), but eventual consistency for GETs and DELETEs of existing objects (existing key) GET after overwrite PUT changes the existing object so that a subsequent GET may fetch the previous and inconsistent object.",
            "ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/Introduction.html"

    },
     {
        "Id": 42,
       "Name": "In order to create a record of who accessed your S3 data and from where, you need to do which of the following?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Enable Amazon CloudWatch logs.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Enable versioning on the bucket.", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable website hosting on the bucket", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Enable server access logs on the bucket", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "Create an AWS Identity and Access Management IAM bucket policy", "IsAnswer": false}],
            
            "explanation" : "Server access logs provide a record of any access to an object in S3.",
            "ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html"

    },
     {
        "Id": 43,
       "Name": "A financial company has 30TB of trading records that needs to be saved for at least 7 years by law. Any record more than a year old is unlikely to be accessed anytime soon. Which of the following storage plans is the most cost efficient?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Store data on EBS volumes attached to T2.Large instances.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Store data on S3 with lifecycle policies that change the storage class to Glacier after one year and deletet the object after 7 years.", "IsAnswer": false},
            { "Id": 1057, "QuestionId": 1010, "Name": "Store the data on DynamoDB and delete the data older than 7 years.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Store the Data on Amazon Glacier Vault Lock", "IsAnswer": true}],
            
            "explanation" : "Server access logs provide a record of any access to an object in S3.",
            "ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html"

    },
     {
        "Id": 44,
       "Name": "What is the primary use case of Amazon Kinesis Firehose?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Ingest huge streams of data and allow custom processing of data in flight.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Ingest huge streams of data and store it to S3, Redshift, or Amazon ElasticSearch Service.", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Generate a huge stream of data from a S3 bucket.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Generate a huge stream of data from DynamoDB", "IsAnswer": false}],
            
            "explanation" : "The Amazon Kinesis family of services provides functionality to ingest large streams of data. Amazon Kinesis Firehose is specifically designed to ingest a stream and save it  to any of the 3 storage services listed in the question.",
            "ref":"https://aws.amazon.com/kinesis/firehose/"

    },
     {
        "Id": 45,
       "Name": "A company wants to host its secure web application in AWS. Any connections to or from the web server is considered insecure and require application data protection. What steps should you take to protect data in transit for the application (Choose 2 answers:)", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use BitLocker to encrypt data.", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use HTTPs with server certificate authentication.", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Use AWS IAM roles.", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Use SSL/TLS for database connection", "IsAnswer": true},
            { "Id": 1059, "QuestionId": 1010, "Name": "Use XML for data transfer from client to server.", "IsAnswer": false}],
            
            "explanation" : "To protect data in transit from clients to web apps HTTPs with server certifie authentication should be used. To protect data in transit from web apps to database SSL/TLS for database connections should be used.",
            "ref":"http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingEncryption.html"

    },
     {
        "Id": 46,
       "Name": "Which of the following Amazon services is durable key value store?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Lambda", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Simple Storage Service (S3)", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Kinesis", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Kinesis Firehose", "IsAnswer": false},
            { "Id": 1059, "QuestionId": 1010, "Name": "AWS EBS", "IsAnswer": false}]

    },
     {
        "Id": 47,
       "Name": "You are a AWS Certified Solution Architect who has recently joined a Fortune 500 company that has a requirement to closely monitor all its environments in production in AWS. You recommend using CloudWatch. One week after setting up CloudWatch the team notices that the health of every important metric in the default dashboard is not being captured. You realize you need to design a custom CloudWatch metric for monioring the detailed health of the EC2 instances. Which of the following metrics should be considered while designing a custom CloudWatch metric?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "CPU Usage", "IsAnswer": false},
            { "Id": 1056, "QuestionId": 1010, "Name": "Memory Usage", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "Disk Read Operations", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "Network In ", "IsAnswer": false},
            { "Id": 1059, "QuestionId": 1010, "Name": "Estimated Charges", "IsAnswer": false}]

    },
    {
        "Id": 48,
        "Name": "Which of the following requires a custom CloudWatch metric to monitor?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Disk full percentage of an Elastic Block Store volume.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Disk usage activity of the ephemeral volumes of an Amazon EC2 instance.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Disk usage activity of an Elastic Block Store volume attached to  an Amazon EC2 instance.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "CPU utilize of an Amazon EC2 instance.", "IsAnswer": false }]
    },
    {
        "Id": 49,
        "Name": "You are currently hosting multiple applications in a VPC and have logged numerous port scans coming in from a specific IP address block. Your security team has requested that all access from the offending IP address block be denied tor the next 24 hours. Which of the following is the best method to quickly and temporarily deny access from the specified IP address block?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Modify the Network ACLs associated with all public subnets in the VPC to deny access from the IP address block", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add a rule to all of the VPC 5 Security Groups to deny access from the IP address block.", "IsAnswer": false }]
    },
    {
        "Id": 50,
        "Name": "An application that you are managing has EC2 instances & DynamoDB tables deployed to several AWS Regions In order to monitor the performance of the application globally, you would like to see two graphs: 1) Avg CPU Utilization across all EC2 instances and 2) Number of Throttled Requests for all DynamoDB tables. How can you accomplish this?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Tag your resources with the application name,and select the tag name as the dimension in the CloudWatch Management Console to view the respective graphs.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use the CloudWatch CLI tools to pull the respective metrics from each regional endpoint. Aggregate the data offline & store it for graphing in CloudWatch.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add SNMP traps to each instance and DynamoDB table Leverage a central monitoring server to capture data from each instance and table. Put the aggregate data into Cloud Watch for graphing.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Add a CloudWatch agent to each instance and attach one to each DynamoDB table. When configuring the agent set the appropriate application name & view the graphs in CloudWatch.", "IsAnswer": false }]
    },
    {
        "Id": 51,
        "Name": "When preparing for a compliance assessment of your system built inside of AWS, what are three best-practices for you to prepare for an audit? (Choose three.)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Gather evidence of your IT operational controls.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Request and obtain applicable third-party audited AWS compliance reports and certifications.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Request and obtain a compliance and security tour of an AWS data center for a pre-assessment security review", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Request and obtain approval from AWS to perform relevant network scans and in-depth penetration tests of your system's Instances and endpoints", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Schedule meetings with AWS's third-party auditors to provide evidence of AWS compliance that maps to your control objectives", "IsAnswer": false }]
    },
    {
        "Id": 52,
        "Name": "An organization's security policy requires multiple copies of all critical data to be replicated across at least a primary and backup data center. The organization has decided to store some critical data on Amazon S3. Which option should you implement to ensure this requirement is met?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use the S3 copy API to replicate data between two S3 buckets in different regions.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You do not need to implement anything since S3 data is automatically replicated between regions.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the S3 copy API to replicate data between two S3 buckets in different facilities within an AWS Region.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You do not need to implement anything since S3 data is automatically replicated between multiple facilities within an AWS Region.", "IsAnswer": true }],
            
            "explanation" : "You specify a region when you create your Amazon S3 bucket. Within that region, your objects are redundantly stored on multiple devices across multiple facilities. Please refer to Regional Products and Services for details of Amazon S3 service availability by region.",
            "ref":"https://aws.amazon.com/s3/faqs/"

    },
    {
        "Id": 53,
        "Name": "A user wants to encrypt all the objects stored in S3 using server side encryption. The user does not want to use the AES 256 encryption key provided by S3. How can the user achieve this?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The admin should upload his secret key to the AWS console and let S3 decrypt the objects.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The admin should use CLI or API to upload the encryption key to the S3 bucket. When making a call to the S3 API mention the encryption key URL in each request.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "S3 does not support client supplied encryption keys for server side encryption.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The admin should send the keys and encryption algorithm with each API call.", "IsAnswer": true }],
            
            "explanation" : "AWS S3 supports client side or server side encryption to encrypt all data at rest. The server side encryption can either have the S3 supplied AES-256 encryption key or the user can send the key along with each API callto supply his own encryption key. Amazon S3 never stores the user's encryption key. The user has to supply it for each encryption or decryption call.",
            "ref":"https://aws.amazon.com/s3/faqs/"
    },
    {
        "Id": 54,
        "Name": "A user has created a VPC with public and private subnets using the VPC wizard. Which of the below mentioned statements is not true in this scenario?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The VPC will create a routing instance and attach it with a public subnet.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The VPC will create two subnets.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The VPC will create one internet gateway and attach it to VPC.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The VPC will launch one NAT instance with an elastic IP.", "IsAnswer": false }],
            
            "explanation" : "A user can create a subnet with VPC and launch instances inside that subnet. If the user has created a public private subnet, the instances in the public subnet can receive inbound traffic directly from the internet, whereas the instances in the private subnet cannot. If these subnets are created with Wizard, AWS will create a NAT instance with an elastic IP. Wizard will also create two subnets with route tables. It will also create an internet gateway and attach it to the VPC."
    },
    {
        "Id": 55,
        "Name": "A user is trying to connect to a running EC2 instance using SSH. However, the user gets a connection time out error. Which of the below mentioned options is not a possible reason for rejection?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The access key to connect to the instance is wrong", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The security group is not configured properly", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The private key used to launch the instance is not correct", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The instance CPU is heavily loaded", "IsAnswer": false }],
            
            "explanation" : "If the user is trying to connect to a Linux EC2 instance and receives the connection time out error the probable reasons are: 1) Security group is not configured with the SSH port 2) The private key pair is not right 3) The user name to login is wrong 4) The instance CPU is heavily loaded, so it does not allow more connections. Remember 'Access Key' is mainly used for making API Calls, not for ssh'ing to servers."
    },
    {
        "Id": 56,
        "Name": "IAM provides several policy templates you can use to automatically assign permissions to the groups you create. The _____ policy template gives the Admins group permission to access all account resources, except your AWS account information", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Read Only Access", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Power User Access", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "AWS Cloud Formation Read Only Access", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Administrator Access", "IsAnswer": false }],
            
            "explanation" : "AWS managed policies are designed to provide permissions for many common use cases. For example, there are AWS managed policies that define typical permissions for administrators (all access), for power users (all access except IAM), and for other various levels of access to AWS services. AWS managed policies make it easier for you to assign appropriate permissions to users, groups, and roles than if you had to write the policies yourself.",
            "ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html"
    },
    {
        "Id": 57,
        "Name": "While performing the volume status checks, if the status is insufficient-data, what does it mean?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "the checks may still be in progress on the volume", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "the check has passed", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "the check has failed", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "there was some problem during the check.", "IsAnswer": false }],
            
            "explanation" : "If the status is insufficient-data, the checks may still be in progress on the volume. You can view the results of volume status checks to identify any impaired volumes and take any necessary actions.",
            "ref":"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volumestatus.html#monitoring-volume-checks"
    },
   {
        "Id": 58,
        "Name": "Your organization's security policy requires that all privileged users either use frequently rotated passwords or one-time access credentials in addition to username/password. Which two of the following options would allow an organization to enforce this policy for AWS users? Choose 2 answers", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Configure multi-factor authentication for privileged IAM users", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create IAM users for privileged accounts", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement identity federation between your organization's Identity provider leveraging the IAM Security Token Service", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Enable the IAM single-use password policy option for privileged users", "IsAnswer": false }],
            "explanation": "IAM does not have single-use password policy and simply creating IAM users for privileged accounts is not sufficient to enforce frequent rotation of passwords",
            "ref": "http://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html"
    },
   {
        "Id": 59,
        "Name": "A user has configured ELB with three instances. The user wants to achieve High Availability as well as redundancy with ELB. Which of the below mentioned AWS services helps the user achieve this for ELB?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route 53", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "AWS Mechanical Turk", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Auto Scaling", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "AWS EMR", "IsAnswer": false }],
            "explanation": "The question specifically asks HA for the ELB. AutoScaling may only provide HA but not redundancy. Route53 weighted/latency records can be placed to route traffic to the ELB in different regions if needed."
    },
   {
        "Id": 60,
        "Name": "You have been asked to propose a multi-region deployment of a web-facing application where a controlled portion of your traffic is being processed by an alternate region. Which configuration would achieve that goal?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route53 record sets with weighted routing policy.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Route53 record sets with latency based routing policy.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Auto Scaling with scheduled scaling actions set.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Elastic Load Balancing with health checks enabled.", "IsAnswer": false }],
            "explanation": "Use the weighted routing policy when you have multiple resources that perform the same function (for example, web servers that serve the same website) and you want Amazon Route 53 to route traffic to those resources in proportions that you specify (for example, one quarter to one server and three quarters to the other).",
            "ref": "http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html"
    }
   ]
}

