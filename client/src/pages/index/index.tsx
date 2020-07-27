import React, { FC } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

import Login from "../../components/login";

const Index: FC = () => {
  return (
    <View className="index">
      <Login />
    </View>
  );
};

export default Index;
