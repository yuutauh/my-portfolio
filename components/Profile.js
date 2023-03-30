import { Avatar, Heading, Stack, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <div id="profile">
      <Heading as="h3" size="lg">
        profile
      </Heading>
	  <Stack align="center" p="10">
		<Avatar size="2xl" name="my image" src="/Logo/myImage.JPG" />
		<Text p="30">内山友太</Text>
		<Text>都留文科大学文学部比較文化学科に在学してます。</Text>
		<Text>
			在学中にプログラミングをはじめ、現在までコツコツ学習しています！
		</Text>
		<Text>
			フロントエンドからバックエンド、デザインにいたるまで広く活躍するプログラマーになりたいです。
		</Text>
		<Text>趣味はウォーキング、銭湯、うさぎなど</Text>
	  </Stack>
    </div>
  );
};

export default Profile;
