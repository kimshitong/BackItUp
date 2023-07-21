CREATE DATABASE  IF NOT EXISTS `db_biu` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_biu`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: db_biu
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `ADMIN_ID` varchar(10) NOT NULL,
  `ADMIN_PASS` varchar(20) NOT NULL,
  PRIMARY KEY (`ADMIN_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investment`
--

DROP TABLE IF EXISTS `investment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investment` (
  `INVEST_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `SHARE_ID` int NOT NULL,
  `SHARE_AMOUNT` int NOT NULL,
  `PAYMENT_ID` int NOT NULL,
  `INVEST_DT` int NOT NULL,
  `INVEST_ACTIVE` int NOT NULL,
  PRIMARY KEY (`INVEST_ID`),
  KEY `USER_ID` (`USER_ID`),
  KEY `SHARE_ID` (`SHARE_ID`),
  KEY `PAYMENT_ID` (`PAYMENT_ID`),
  CONSTRAINT `investment_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`),
  CONSTRAINT `investment_ibfk_2` FOREIGN KEY (`SHARE_ID`) REFERENCES `share` (`SHARE_ID`),
  CONSTRAINT `investment_ibfk_3` FOREIGN KEY (`PAYMENT_ID`) REFERENCES `payment` (`PAYMENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investment`
--

LOCK TABLES `investment` WRITE;
/*!40000 ALTER TABLE `investment` DISABLE KEYS */;
/*!40000 ALTER TABLE `investment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `NOTI_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `NOTI_TYPE` varchar(50) NOT NULL,
  `NOTI_MESSAGE` varchar(1024) DEFAULT NULL,
  `NOTI_READ` tinyint(1) NOT NULL,
  `NOTI_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`NOTI_ID`),
  KEY `USER_ID` (`USER_ID`),
  CONSTRAINT `notification_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PAYMENT_ID` int NOT NULL AUTO_INCREMENT,
  `PAYMENT_AMOUNT` int NOT NULL,
  `WALLET_ID_FROM` int NOT NULL,
  `WALLET_ID_TO` int NOT NULL,
  `PAYMENT_DT` datetime NOT NULL,
  `DETAILS` text,
  PRIMARY KEY (`PAYMENT_ID`),
  KEY `WALLET_ID_FROM` (`WALLET_ID_FROM`),
  KEY `WALLET_ID_TO` (`WALLET_ID_TO`),
  CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`WALLET_ID_FROM`) REFERENCES `wallet` (`WALLET_ID`),
  CONSTRAINT `payment_ibfk_2` FOREIGN KEY (`WALLET_ID_TO`) REFERENCES `wallet` (`WALLET_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `POST_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `POST_TITLE` text NOT NULL,
  `POST_DESCRIPTION` text NOT NULL,
  `POST_CONTENT` text NOT NULL,
  `POST_URL` text NOT NULL,
  `POST_SUSTAINABLE` tinyint(1) NOT NULL,
  `SHARE_ID` int NOT NULL,
  `POST_STATUS` int NOT NULL,
  `POST_CREATE_DT` datetime NOT NULL,
  `POST_APPROVED_DT` datetime DEFAULT NULL,
  `POST_RAISE_DT` datetime DEFAULT NULL,
  `POST_EXPIRE_DT` datetime NOT NULL,
  `POST_FINALISING_DT` datetime DEFAULT NULL,
  `POST_COMPLETED_DT` datetime DEFAULT NULL,
  `POST_PHOTOURL` text,
  PRIMARY KEY (`POST_ID`),
  KEY `USER_ID` (`USER_ID`),
  KEY `SHARE_ID` (`SHARE_ID`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`),
  CONSTRAINT `post_ibfk_2` FOREIGN KEY (`SHARE_ID`) REFERENCES `share` (`SHARE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,8,'CompactKey 65','A small mechanical keyboard for your everyday needs made','Introducing the CompactKey: Redefining Your Everyday Typing Experience \n\n\nAre you tired of struggling with clunky, uncomfortable keyboards that take up valuable desk space? Look no further! We proudly present the CompactKey, a small mechanical keyboard designed to revolutionize your everyday typing needs. \n\n\nAt just half the size of a standard keyboard, the CompactKey combines compactness with functionality, making it the perfect companion for any tech enthusiast, gamer, or professional on the go. Its sleek and minimalist design not only saves space but also enhances your productivity and typing comfort. \n\n\nThe key to the CompactKey success lies in its premium mechanical switches. We understand that typing is an art, and the keyboard should feel like an extension of your fingertips. That why we have integrated high-quality, responsive switches that deliver a satisfying tactile feedback with each keystroke. Whether youre a swift touch typist or someone who appreciates the audible click, the CompactKey offers a range of switch options tailored to suit your preferences.\n\n\nDespite its small size, the CompactKey boasts all the essential features you need for seamless and efficient typing. Equipped with a fully programmable layout, you can customize the keyboard to your liking, assigning shortcuts and macros to streamline your workflow. With its ergonomic design, you can bid farewell to wrist strain and type comfortably for extended periods, boosting both your productivity and overall wellbeing.\n\n\nPortability is a priority, and the CompactKey meets this requirement flawlessly. Its lightweight construction and detachable USB cable allow you to take it wherever you go, ensuring that you never compromise on your typing experience, whether youre in the office, on a business trip, or working from the comfort of your favorite café.\n\n\nBut the CompactKey doesnt stop there. It also features dynamic RGB backlighting that adds a touch of style and personalization to your workspace. Choose from a spectrum of vibrant colors and lighting effects to match your mood or create an ambiance that suits your environment.\n\n\nIn summary, the CompactKey is not just another keyboard. Its a compact powerhouse that revolutionizes your everyday typing experience. Say goodbye to discomfort, limited space, and compromised productivity. Embrace the CompactKey and unlock a world of efficient, ergonomic, and enjoyable typing. Upgrade your typing game today!','https://example.com/post1',1,1,1,'2023-05-27 10:00:00',NULL,NULL,'2023-05-30 10:00:00',NULL,NULL,NULL),(2,9,'LuminaConnect','An eco-friendly lamp with a mobile app companion','Introducing LuminaConnect: Illuminating the Future, Responsibly\n\n\nIn a world that strives for sustainability and connectivity, we proudly present LuminaConnect—an innovative eco-friendly lamp that seamlessly connects to a mobile app. With LuminaConnect, we are revolutionizing how we illuminate our spaces while prioritizing our planets well-being.\n\n\nLuminaConnect combines elegant design, advanced technology, and environmental consciousness to create an unparalleled lighting experience. Crafted from sustainable materials and utilizing energy-efficient LED bulbs, this lamp significantly reduces carbon emissions without compromising on functionality or style. By opting for LuminaConnect, you are making a conscious choice to minimize your environmental footprint.\n\n\nBut LuminaConnect goes beyond being just an eco-friendly lamp—it is a smart lighting solution that empowers you to control your illumination with a touch of your fingertips. Through our intuitive mobile app, you have full control over brightness levels, color temperatures, and even lighting schedules. Create the perfect ambiance for every moment, whether you are working, relaxing, or entertaining guests.\n\n\nThe LuminaConnect app goes beyond basic control. It features innovative functionalities that enhance your overall lighting experience. For instance, the app includes a sunrise and sunset simulation feature, mimicking natural light transitions to gently wake you up or lull you to sleep. Additionally, you can sync LuminaConnect with your favorite music playlist or movies, allowing the lamp to dynamically change its lighting based on the audio or visuals, immersing you in a captivating experience.\n\n\nOur commitment to sustainability extends to the entire lifecycle of LuminaConnect. The lamp is designed to be easily disassembled and recycled, reducing waste and ensuring responsible disposal. We also offer regular software updates, enabling new features, and enhancing performance over time. By choosing LuminaConnect, you are investing in a long-lasting, future-proof lighting solution that adapts to your needs.\n\n\nJoin us in embracing the future of lighting with LuminaConnect. Experience the perfect blend of eco-consciousness, cutting-edge technology, and personalized control—all at your fingertips. Illuminate your space responsibly and create an atmosphere that inspires and delights. LuminaConnect—lighting the way to a sustainable tomorrow.','https://example.com/post2',1,2,1,'2023-05-28 10:00:00',NULL,NULL,'2023-05-31 10:00:00',NULL,NULL,NULL),(3,10,'FitStyle++','Functional and fashionable activewear','Introducing FitStyle+: Elevate Your Workout, Embrace Your Style\n\n\nAre you tired of compromising between style and functionality when it comes to your gym attire? Look no further! We proudly present FitStyle+, a revolutionary line of aesthetic gymwear that seamlessly integrates a built-in heart rate tracker. With FitStyle+, you can elevate your workout while embracing your unique sense of style.\n\n\nFitStyle+ combines fashion-forward design with advanced fitness technology to create a gymwear experience like no other. Our team of experts has meticulously crafted each piece, ensuring they not only look stunning but also provide the ultimate comfort and functionality during your workout sessions.\n\n\nOne of the key features that sets FitStyle+ apart is the integrated heart rate tracker. No more uncomfortable chest straps or bulky wearables—our state-of-the-art sensor technology is seamlessly woven into the fabric of your gymwear. This discreet and accurate tracker continuously monitors your heart rate, allowing you to optimize your workouts, track your progress, and make informed decisions about your training intensity.\n\n\nFitStyle+ goes beyond mere functionality—it is a true reflection of your personal style. Our collection features a wide range of vibrant colors, unique patterns, and modern silhouettes that will make you look and feel your best. Whether you prefer bold and edgy designs or subtle and elegant aesthetics, FitStyle+ has the perfect ensemble to match your individuality and boost your confidence as you hit the gym.\n\n\nComfort is at the core of FitStyle+. Our gymwear is crafted from high-quality, breathable fabrics that wick away moisture, ensuring you stay cool and dry throughout your workout. The stretchable materials provide a perfect fit, allowing you to move freely and confidently, no matter the exercise. With FitStyle+, you will experience unparalleled comfort and flexibility, enabling you to unleash your full potential during each training session.\n\n\nThe FitStyle+ mobile app acts as your personalized fitness companion. Connect it to your FitStyle+ gear, and it will not only display your heart rate in real-time but also offer valuable insights and analysis of your workout data. Set goals, track your progress, and challenge yourself to reach new heights with the help of our intuitive and user-friendly app.\n\n\nEmbrace the fusion of style and functionality with FitStyle+. Elevate your workout wardrobe and let your gymwear inspire your fitness journey. Look fabulous, track your heart rate effortlessly, and unleash your inner confidence with FitStyle+. It is time to make a statement in and out of the gym. FitStyle+—where fitness meets fashion.','https://example.com/post2',0,2,1,'2023-05-28 10:00:00',NULL,NULL,'2023-05-31 10:00:00',NULL,NULL,NULL),(4,11,'AquaTrack','Water consumption tracker with actionable insights','Introducing AquaTrack: Your Personal Hydration Assistant\n\n\nAre you struggling to stay adequately hydrated throughout the day? Do you find it challenging to keep track of your water intake and maintain a healthy hydration routine? Look no further! We are thrilled to introduce AquaTrack, a revolutionary software that tracks your water consumption and provides AI-powered insights to help you stay hydrated and thrive.\n\n\nAquaTrack combines cutting-edge technology with the power of artificial intelligence to create a personalized hydration experience like no other. Our intuitive software seamlessly integrates with your smartphone or smartwatch, allowing you to effortlessly monitor your water intake throughout the day. By simply logging your water consumption, AquaTrack keeps a detailed record of your hydration habits.\n\n\nBut AquaTrack goes beyond basic tracking. Our AI-powered algorithms analyze your data, taking into account various factors such as your age, weight, activity level, and environmental conditions to provide tailored insights and recommendations. Whether you need a gentle reminder to drink more water or want to optimize your hydration strategy for peak performance, AquaTrack has you covered.\n\n\nStay motivated and accountable with our interactive features. Set hydration goals, and our software will provide real-time progress updates and gentle reminders to keep you on track. Celebrate your milestones and achievements as you build healthy habits and improve your overall well-being.\n\n\nOur AI-powered insights offer valuable guidance and optimization strategies. Our software analyzes patterns in your hydration data to identify potential areas for improvement. From suggesting optimal water intake timings to recommending hydration-rich foods, AquaTrack empowers you to make informed choices and take control of your hydration journey.\n\n\nWe understand that every individual is unique, and their hydration needs may vary. AquaTrack allows you to customize your preferences, ensuring the software adapts to your lifestyle. Whether you prefer metric or imperial units, specific water intake targets, or reminders at specific intervals, AquaTrack can be tailored to suit your preferences and goals.\n\n\nJoin the hydration revolution with AquaTrack. Experience the power of technology and AI to transform your water consumption habits. Stay on top of your hydration game, boost your energy levels, and unlock your full potential. AquaTrack—your personal hydration assistant, guiding you toward a healthier, more hydrated you. Start your journey today and drink smarter with AquaTrack.','https://example.com/post2',1,2,1,'2023-05-28 10:00:00',NULL,NULL,'2023-05-31 10:00:00',NULL,NULL,NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `share`
--

DROP TABLE IF EXISTS `share`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `share` (
  `SHARE_ID` int NOT NULL AUTO_INCREMENT,
  `USER_ID` int NOT NULL,
  `SHARE_COUNT_TOTAL` int NOT NULL,
  `SHARE_COUNT_MIN` int NOT NULL,
  `SHARE_COUNT_CURRENT` int NOT NULL,
  `SHARE_COUNT_PRICE` double NOT NULL,
  `SHARE_DIVIDEND` int DEFAULT NULL,
  PRIMARY KEY (`SHARE_ID`),
  KEY `USER_ID` (`USER_ID`),
  CONSTRAINT `share_ibfk_1` FOREIGN KEY (`USER_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `share`
--

LOCK TABLES `share` WRITE;
/*!40000 ALTER TABLE `share` DISABLE KEYS */;
INSERT INTO `share` VALUES (1,6,10000,50,100,10,5),(2,7,5000,20,40,10,3);
/*!40000 ALTER TABLE `share` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topup`
--

DROP TABLE IF EXISTS `topup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topup` (
  `TOPUP_ID` int NOT NULL AUTO_INCREMENT,
  `WALLET_ID` int NOT NULL,
  `TOPUP_AMOUNT` int NOT NULL,
  `TOPUP_PAYNOW` int NOT NULL,
  `TOPUP_EVIDENCE` blob,
  `TOPUP_VERIFIED` tinyint(1) NOT NULL,
  `TOPUP_DT` datetime NOT NULL,
  `TOPUP_DONE_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`TOPUP_ID`),
  KEY `WALLET_ID` (`WALLET_ID`),
  CONSTRAINT `topup_ibfk_1` FOREIGN KEY (`WALLET_ID`) REFERENCES `wallet` (`WALLET_ID`),
  CONSTRAINT `topup_ibfk_2` FOREIGN KEY (`WALLET_ID`) REFERENCES `wallet` (`WALLET_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topup`
--

LOCK TABLES `topup` WRITE;
/*!40000 ALTER TABLE `topup` DISABLE KEYS */;
INSERT INTO `topup` VALUES (1,1,150,15,NULL,0,'2023-05-27 10:00:00',NULL),(2,5,200,15,NULL,0,'2023-05-27 10:00:00',NULL);
/*!40000 ALTER TABLE `topup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(30) NOT NULL,
  `USER_EMAIL` varchar(30) NOT NULL,
  `USER_HP` char(12) NOT NULL,
  `USER_PASS` varchar(30) NOT NULL,
  `USER_TYPE` char(10) NOT NULL,
  `USER_VERIFIED` int DEFAULT '0',
  `USER_SHOWCONTACT` tinyint(1) DEFAULT '0',
  `USER_LINKEDINLINK` text,
  `USER_OAUTHTYPE` varchar(30) DEFAULT NULL,
  `USER_OAUTHIDENTIFIER` text,
  `USER_EVIDENCE` text,
  `USER_DESCRIPTION` text,
  `WALLET_ID` int NOT NULL,
  `CREATOR_ID` int DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  KEY `WALLET_ID` (`WALLET_ID`),
  KEY `CREATOR_ID` (`CREATOR_ID`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`WALLET_ID`) REFERENCES `wallet` (`WALLET_ID`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`CREATOR_ID`) REFERENCES `user` (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Founder 1','founder1@example.com','1234567890','password1','Founder',1,0,NULL,NULL,NULL,NULL,NULL,1,NULL),(2,'Founder 2','founder2@example.com','0987654321','password2','Founder',1,0,NULL,NULL,NULL,NULL,NULL,2,NULL),(3,'Founder 3','founder3@example.com','9876543210','password3','Founder',1,0,NULL,NULL,NULL,NULL,NULL,3,NULL),(4,'Investor 1','investor1@example.com','1111111111','password4','Investor',1,0,NULL,NULL,NULL,NULL,NULL,4,NULL),(5,'Investor 2','investor2@example.com','2222222222','password5','Investor',1,0,NULL,NULL,NULL,NULL,NULL,5,NULL),(6,'Company 1','company1@example.com','3333333333','password6','Company',1,0,NULL,NULL,NULL,NULL,NULL,6,NULL),(7,'Company 2','company2@example.com','4444444444','password7','Company',1,0,NULL,NULL,NULL,NULL,NULL,7,NULL),(8,'CompactKey','company3@example.com','4444444444','password7','Company',1,0,NULL,NULL,NULL,NULL,NULL,8,NULL),(9,'Lumina','company4@example.com','4444444444','password7','Company',1,0,NULL,NULL,NULL,NULL,NULL,9,NULL),(10,'FS Apparel','company5@example.com','4444444444','password7','Company',1,0,NULL,NULL,NULL,NULL,NULL,10,NULL),(11,'AquaTrack Holdings','company6user@example.com','4444444444','password7','Company',1,0,NULL,NULL,NULL,NULL,NULL,11,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `WALLET_ID` int NOT NULL AUTO_INCREMENT,
  `ACTIVE_BALANCE` int NOT NULL,
  `FROZEN_BALANCE` int NOT NULL,
  PRIMARY KEY (`WALLET_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1,10000,0),(2,5000,0),(3,5000,0),(4,5000,0),(5,5000,0),(6,5000,0),(7,20000,0),(8,10000,0),(9,90000,0),(10,100000,0),(11,200,0);
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `withdrawal`
--

DROP TABLE IF EXISTS `withdrawal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `withdrawal` (
  `WITHDRAWAL_ID` int NOT NULL AUTO_INCREMENT,
  `WALLET_ID` int NOT NULL,
  `WITHDRAWAL_AMOUNT` int NOT NULL,
  `WITHDRAWAL_PAYNOW` int NOT NULL,
  `WITHDRAWAL_DT` datetime NOT NULL,
  `WITHDRAWAL_VERIFIED` int NOT NULL,
  `WITHDRAWAL_DONE_DT` datetime DEFAULT NULL,
  PRIMARY KEY (`WITHDRAWAL_ID`),
  KEY `WALLET_ID` (`WALLET_ID`),
  CONSTRAINT `withdrawal_ibfk_1` FOREIGN KEY (`WALLET_ID`) REFERENCES `wallet` (`WALLET_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `withdrawal`
--

LOCK TABLES `withdrawal` WRITE;
/*!40000 ALTER TABLE `withdrawal` DISABLE KEYS */;
INSERT INTO `withdrawal` VALUES (1,1,100,15,'2023-05-27 10:00:00',0,NULL),(2,5,50,15,'2023-05-27 10:00:00',0,NULL);
/*!40000 ALTER TABLE `withdrawal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 16:27:56
