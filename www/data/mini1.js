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
    }, 
    {
        "Id": 21,
        "Name": "Select the most correct answer regarding the persistence of the Amazon Instance Store", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The data on an instance store volume persists only during the life of the associated Amazon EC2 instance", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "The data on an instance store volume is lost when the security group rule of the associated instance is changed", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "The data on an instance store volume persists even after associated Amazon EC2 instance is deleted", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "The data on an instance store volume persists even after associated Amazon EC2 instance is terminated", "IsAnswer": false }]
    }, 
    {
        "Id": 22,
        "Name": "A web startup provides language translation services. Users can record sound files in .wav format and upload to their site. The .wav files are internally uploaded to S3 buckets by the website. A fleet of spot EC2 instances runs an app that does the actual processing of the .wav files and then converts the sound to text, detects the language, dialect and intelligently translates into the desired language of the user's choosing. The startup offers a freemium model. Users can try the service free of charge for the first seven days and then must sign up for the paid service. As an architect for this startup you want to make sure that .wav files submitted by your paying customers must be transformed with the highest priority, before the requests submitted by the free customers. How will you implement such a system?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first.", "IsAnswer": false }]
    }, 
    {
        "Id": 23,
        "Name": "What is one key difference between an Amazon EBS-backed and an instance-store backed instance?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Instance-store backed instances can be stopped and restarted", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Auto scaling requires using Amazon EBS-backed instances", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Amazon EBS-backed instances can be stopped and restarted", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Virtual Private Cloud requires EBS backed instances", "IsAnswer": false }]
    }, 
    {
        "Id": 24,
        "Name": "You would like to create a mirror image of your production environment in another region for disaster recovery purposes. Which of the following AWS resources do not need to be recreated in the second region? (Choose 2 answers)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Route 53 Record Sets", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "IAM Roles", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Elastic IP Addresses (EIP)", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "EC2 Key Pairs", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Launch configurations", "IsAnswer": false },
            { "Id": 1060, "QuestionId": 1010, "Name": "Security Groups", "IsAnswer": false }]
    }, 
    {
        "Id": 25,
        "Name": "Your company runs a customer facing event registration site. This site is built with a 3-tier architecture with web and application tier servers and a MySQL database. The application requires 6 web tier servers and 6 application tier servers for normal operation, but can run on a minimum of 65% server capacity and a single MySQL database. When deploying this application in a region with three availability zones (AZs) which architecture provides high availability?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer), and an application tier deployed across 2 AZs with 3 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB. and one RDS (Relational Database Service) instance deployed with read replicas in the other AZ.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 3 AZs with 2 EC2 instances in each AZ inside an Auto Scaling Group behind an ELB and one RDS (Relational Database Service) Instance deployed with read replicas in the two other AZs.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "A web tier deployed across 2 AZs with 3 EC2 (Elastic Compute Cloud) instances in each AZ inside an Auto Scaling Group behind an ELB (elastic load balancer) and an application tier deployed across 2 AZs with 3 EC2 instances m each AZ inside an Auto Scaling Group behind an ELS and a Multi-AZ RDS (Relational Database Service) deployment.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "A web tier deployed across 3 AZs with 2 EC2 (Elastic Compute Cloud) instances in each AZ Inside an Auto Scaling Group behind an ELB (elastic load balancer). And an application tier deployed across 3 AZs with 2 EC2 instances In each AZ inside an Auto Scaling Group behind an ELB. And a Multi-AZ RDS.", "IsAnswer": false }]
    }, 
    {
        "Id": 26,
        "Name": "A radio news broadcasting network recently launched a website that allows its subscribers to report on major news events around the world using their mobile devices. Part of requirements for this new website is that subscribers should be able to upload pictures and media files from their cell phones to the website. In line with the nature of business its very reasonable to expect seasonal bursts in traffic if and when major events happen around the globe. The website will use Amazon Web Service’s S3 buckets to store the picture and media content. The desire is to keep the storage costs to a minimum and the business has given a nod to the fact that durability could be sacrificed (within reason) as long as costs are kept to a minimum. In other words its OK if some S3 objects are lost. Given these requirements which storage media will you recommend?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "S3 - Infrequently Accessed Storage.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "S3 - Reduced Redundancy Storage (RRS).", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Glacier", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "S3 - Provisioned IOPS.", "IsAnswer": false }]
    }, 
    {
        "Id": 27,
        "Name": "Since you were the first AWS Certified Solutions Architect in your company; your department assigned you the responsibility to create their first AWS account. You have access to the root account to log into the console and manage the company’s AWS resources. Over time interest in AWS across your company has exploded and now there are several co-workers who would like to try their hands at using AWS. You were the only one so far with access to the root account. You now need to share the company’s AWS resources with a larger staff. What should you do so that everyone can safely access the AWS resources? (select 2)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an additional AWS root account for each new user.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create individual user accounts with minimum necessary rights and tell the staff to log in to the console using the credentials provided.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a customized sign in link such as yourcompany.signin.aws.amazon.com/console for your new users to use to sign in with.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Give your users the root account credentials so that they can also sign in.", "IsAnswer": false }]
    }, 
    {
        "Id": 28,
        "Name": "You supervisor has requested that a new co-worker be granted administrative access to your company’s AWS console. As an admin yourself you have have created the new co-worker a user name, access key ID, secret access key and you have generated a password for her. She is  able to log in to the AWS console, but  cannot do anything else. What should you do next?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Add her to the Administrators group, where your other administrator users belong.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Set up multi-factor authentication for her.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Ensure she is  logging in to the AWS console from your corporate network and not the normal internet.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Tell her to log out and try logging back in again.", "IsAnswer": false }]
    }, 
    {
        "Id": 29,
        "Name": "A company headquartered in Dubai, UAE recently decided to shut down their local data center and move all the legacy hardware to AWS. You are hired as their Solution Architect and your first order of business is to figure out user accounts in IAM. The company has small offices/ staff in India, Singapore and Sydney. You need to setup accounts for users in those offices as well. Which of the following is true?", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "You will then need to configure Users and Policy Documents for each region respectively.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "You will need to configure Users and Policy Documents only once, as these are applied globally.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "You will need to configure your users regionally, however your policy documents are global.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "You will need to configure your policy documents regionally, however your users are global.", "IsAnswer": false }]
    }, 
    {
        "Id": 30,
        "Name": "Your company’s website is hosted on EC2 instances that are part of an Auto Scaling Group. The app talks to database hosted on a Large MySql instance. A seasonal burst of traffic is expected and on running a load test its found that the database struggles to keep up with the reads that are generated by high traffic. What will you recommend to successfully scale the environment to achieve high speed? (select 2)", 
       "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Migrate the database to a MySQL Multi-AZ database", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a read replica of the MySQL database", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Migrate the database from MySQL to Aurora for better performance", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Place the RDS instances behind a secondary Auto Scaling Group", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Implement Elasticache to cache the most common queries and configure Magento to use this caching service", "IsAnswer": true }]
    }
     ]
}





