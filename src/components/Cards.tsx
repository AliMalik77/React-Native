import * as React from "react";
import { Text, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

const CardComponent = ({ data, type }: any) => {
  //   console.log("props data is ", data);
  //   console.log("i m calling", type);

  return (
    <View>
      {data.type === "User" ? (
        <Card>
          <Card.Title title={data.login} />
          <Card.Cover source={{ uri: data.avatar_url }} />
        </Card>
      ) : (
        <Card>
          <Card.Title title={data.name} />
          <Card.Cover source={{ uri: data.owner.avatar_url }} />
        </Card>
      )}
    </View>
  );
};

export default CardComponent;
