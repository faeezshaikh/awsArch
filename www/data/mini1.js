{
    "quiz": {
        "Id": 400,
        "name": "Mini Quiz ",
        "logo" : "data/img/S3.png"
    },
    "questions": [{
        "Id": 1,
        "Name": "You configured a standy for a RDS instance. Will the stand-by instance be in the same Availability Zone as the primary?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Yes", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "No", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Only for MySql RDS instances.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Only if configured at launch", "IsAnswer": false }]
                
       
    },
    {
        "Id": 2,
        "Name": "Which of the following is best suited for Database style apps that need frequent random reads and writes across datasets?", 
        
        "Options": [
             { "Id": 1055, "QuestionId": 1010, "Name": "S3", "IsAnswer": false },
             { "Id": 1056, "QuestionId": 1010, "Name": "EBS", "IsAnswer": true },
             { "Id": 1057, "QuestionId": 1010, "Name": "S3 RRS", "IsAnswer": false },
             { "Id": 1058, "QuestionId": 1010, "Name": "Root device", "IsAnswer": false }]
        
    },
    {
        "Id": 3,
        "Name": "A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? Choose 2 answers", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon Simple Email Service", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon CloudWatch", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Route 53", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Notification Service", "IsAnswer": true }]
        
    },
    {
        "Id": 4,
        "Name": "Which of the following are best suited for Amazon DynamoDB? Choose 3 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Storing BLOB data.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Managing web sessions.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Storing JSON documents.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Storing metadata for Amazon S3 objects.", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Running relational joins and complex updates.", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "Storing large amounts of infrequently accessed data.", "IsAnswer": false }] 
    },
    {
        "Id": 5,
        "Name": "A web-startup is deploying a two-tier, highly available web application to AWS. Which service provides durable storage for static content while utilizing lower overall CPU resources for the web tier?", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Amazon EBS volume", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon S3", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EC2 instance store", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon RDS instance", "IsAnswer": false }]
    },
    {
        "Id": 6,
        "Name": "Which of the following services natively encrypts data at rest within an AWS region? Choose 2 answers", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "AWS Storage Gateway", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon CloudFront", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon Glacier", "IsAnswer": true },
            { "Id": 1059, "QuestionId": 1010, "Name": "Amazon Simple Queue Service", "IsAnswer": false }]
        
    },
    {
        "Id": 7,
        "Name": "The initial setting for the default security group is:", 
        
      "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow no outbound traffic and Allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow no inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Allow all inbound traffic, Allow all outbound traffic and Does NOT allow instances associated with this security group to talk to each other", "IsAnswer": false }]
        
    },
    {
        "Id": 8,
        "Name": "If your DB instance runs out of storage space or file system resources, its status will change to _____ and your DB Instance will no longer be available.", 
        
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "storage-overflow", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "storage-full", "IsAnswer": true},
            { "Id": 1057, "QuestionId": 1010, "Name": "storage-exceed", "IsAnswer": false},
            { "Id": 1058, "QuestionId": 1010, "Name": "storage-overage", "IsAnswer": false}]
    },
    {
        "Id": 9,
        "Name": "For which of the following will you choose Provisioned IOPS over Standard RDS storage?", 
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Production online transaction processing (OLTP) workloads.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Batch-oriented workloads", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Workloads that are not sensitive to consistent performance", "IsAnswer": false }]
        
    },
    {
        "Id": 10,
        "Name": "In the 'Detailed' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send _____ minute metrics to Amazon CloudWatch.", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "5", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "1", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "3", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "10", "IsAnswer": false }]
    },
    {
        "Id": 11,
        "Name": "How can the domain's zone apex, for example, 'nakeddomain.com', be pointed towards an Elastic Load Balancer?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "By using an Amazon Route 53 Alias record", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "By using an AAAA record", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "By using an Amazon Route 53 CNAME record", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "By using an A record", "IsAnswer": false }]
    },
    {
        "Id": 12,
        "Name": "A video transcoding application running on EC2 instance polls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. There's a large backlog of videos which need to be transcoded and you need  to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Reserved instances", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Spot instances", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Dedicated instances", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "On-demand instances", "IsAnswer": false }]
    },
    {
        "Id": 13,
        "Name": " You want to deploy a new two-tier web application in AWS. The app should be highly available, and the application requires complex queries and table joins. Which configuration provides the best solution for these requirements?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "MySQL Installed on two Amazon EC2 Instances in a single Availability Zone", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Amazon RDS for MySQL with Multi-AZ", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon ElastiCache", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Amazon DynamoDB", "IsAnswer": false }]
    },
    {
        "Id": 14,
        "Name": "An EC2 instance that is backed by an S3-based AMI is terminated, what will happen to the data on the root volume?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Data is automatically saved as an EBS snapshot.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Data is automatically saved as an EBS volume.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Data is unavailable until the instance is restarted.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Data is automatically deleted.", "IsAnswer": true }]
    },
    {
        "Id": 15,
        "Name": "A corporate website is hosted on a cluster of web servers that are behind a public-facing load balancer. Amazon Route 53 is being used to manage the public DNS. How should you configure the DNS zone apex record to point to the load balancer?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an A record pointing to the IP address of the load balancer", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a CNAME record pointing to the load balancer DNS name.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a CNAME record aliased to the load balancer DNS name.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an A record aliased to the load balancer DNS name.", "IsAnswer": true }]
    },
    {
        "Id": 16,
        "Name": "A corporate website is hosted on a cluster of web servers that are behind a public-facing load balancer. Amazon Route 53 is being used to manage the public DNS. How should you configure the DNS zone apex record to point to the load balancer?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an A record pointing to the IP address of the load balancer", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a CNAME record pointing to the load balancer DNS name.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a CNAME record aliased to the load balancer DNS name.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an A record aliased to the load balancer DNS name.", "IsAnswer": true }]
    },
    {
        "Id": 17,
        "Name": "An instance is launched into a VPC subnet with the network ACL configured to allow all inbound traffic and deny all outbound traffic. The instance's security group is configured to allow SSH from any IP address and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The outbound security group needs to be modified to allow outbound traffic.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "The outbound network ACL needs to be modified to allow outbound traffic.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Nothing, it can be accessed from any IP address using SSH.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic", "IsAnswer": false }]
    },
    {
        "Id": 18,
        "Name": "A company is designing a web application that stores static assets in a S3 bucket. You expect this bucket to immediately receive over 150 PUT requests per second. What should the company do to ensure optimal performance?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use multi-part upload.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add a random prefix to the key names.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon S3 will automatically manage performance at this scale.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use a predictable naming scheme, such as sequential numbers or date time sequences, in the key names", "IsAnswer": false }]
    },
    {
        "Id": 19,
        "Name": "A company  is doing a Proof of concept project. Their goal is to leverage AWS as a programmable infrastructure. They would like to manage their AWS infrastructure in a manner similar to the way you might manage application code. They want to be able to deploy exact copies of different versions of their infrastructure, stage changes into different environments, revert back to previous versions, and identify what versions are running at any particular time  (development test QA. production). Which approach will meet these requirement?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use cost allocation reports and AWS Opsworks to deploy and manage infrastructure.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use AWS CloudWatch metrics and alerts along with resource tagging to deploy and manage infrastructure.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use AWS Beanstalk and a version control system like GIT to deploy and manage infrastructure.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS CloudFormation and a version control system like GIT to deploy and manage infrastructure.", "IsAnswer": true }]
    },
    {
        "Id": 20,
        "Name": "HasCorp Ltd. is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but they would like to further limit administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VPC.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Deploy a Windows Bastion host with an auto-assigned Public IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses.", "IsAnswer": true }]
    }
     ]
}





