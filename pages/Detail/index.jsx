import React from "react";
import { ScrollView, View, Text, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";

export default function Detail({ route }) {
  const { width } = useWindowDimensions();
  const { title, content, writer } = route.params;
  const source = {
    html: content,
  };
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Text
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            minWidth: "max-content",
            padding: "8px",
            borderRight: "1px solid black",
          }}
        >
          제목
        </Text>
        <Text style={{ fontSize: "1.2rem", fontWeight: "600", padding: "4px" }}>
          {title}
        </Text>
      </View>
      <RenderHTML contentWidth={width} source={source} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        <Text
          style={{
            fontSize: "1.5rem",
            fontWeight: "600",
            minWidth: "max-content",
            padding: "8px",
            borderRight: "1px solid black",
          }}
        >
          작성자
        </Text>
        <Text style={{ fontSize: "1.2rem", fontWeight: "600", padding: "4px" }}>
          {writer}
        </Text>
      </View>
    </ScrollView>
  );
}