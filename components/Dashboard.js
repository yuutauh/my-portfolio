import {
  Box,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  Image,
  Spacer
} from "@chakra-ui/react";
import CardComponent from "./CardComponent";


const Dashboard = () => {
  return (
	<div id="skill">
	<Heading as="h3" size="lg" mb="5" >
        skill
    </Heading>
    <SimpleGrid spacing="10" minChildWidth={{ sm: "250px"}}>
      <CardComponent 
	  src={"/Logo/htmlLogo.png"} 
	  title={"HTML"}
	  body={""}  
	  />
	  <CardComponent 
	  src={"/Logo/cssLogo.png"} 
	  title={"CSS"}
	  body={""}  
	  />
	  <CardComponent 
	  src={"/Logo/javascriptLogo.png"} 
	  title={"Javascript"}
	  body={""}  
	  />
	  <CardComponent 
	  src={"/Logo/figmaLogo.png"} 
	  title={"Figma"}
	  body={"ロゴの制作に使用しました"}  
	  />
	  <CardComponent 
	  src={"/Logo/githubLogo.png"} 
	  title={"git/github"}
	  body={"branchの分岐やマージ、プッシュ、プルリクエストなど基本的な操作ができます"}  
	  />
	  <CardComponent 
	  src={"/Logo/reactLogo.png"} 
	  title={"React"}
	  body={"基本的に扱えます"}  
	  />
	  <CardComponent 
	  src={"/next.svg"} 
	  title={"Nextjs"}
	  body={"当ポートフォリオはNextjs,Chakra UIを使用して制作しました"}  
	  />
	  <CardComponent 
	  src={"/Logo/firebaseLogo.png"} 
	  title={"Firebase"}
	  body={"google、twitterアカウントの認証、firestore,firestorage,cloud functions"}  
	  />
	  <CardComponent 
	  src={"/Logo/linuxLogo.png"} 
	  title={"Linux"}
	  body={"「新しいLinuxの教科書」の書籍で学習、基本的なコマンドなど"}  
	  />
	  <CardComponent 
	  src={"/Logo/awsLogo.png"} 
	  title={"AWS"}
	  body={"「さわって学ぶクラウドインフラ　AmazonWebServices 基礎からのネットワーク＆サーバー構築」の書籍を通じて学習、ec2の立ち上げなど基本的な構築 現在はECR,ECS,fargateについて学習しています"}  
	  />
	  <CardComponent 
	  src={"/Logo/dockerLogo.png"} 
	  title={"Docker"}
	  body={"python,Nextjs,railsなどdocker-composeを用いて環境構築ができます"}  
	  />
	  <CardComponent 
	  src={"/Logo/RailsLogo.png"} 
	  title={"ruby on rails"}
	  body={"「プロを目指す人のためのRuby入門」「Ruby on Rails5速習実践ガイド」などの書籍で学習しました"}  
	  />
    </SimpleGrid>
	</div>
  );
};

export default Dashboard;
