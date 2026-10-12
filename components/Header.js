import { View as ViewJfg, Text as TextJfg, StyleSheet as StyleSheetJfg } from "react-native";

export default function HeaderJfg() {
  return (
    <ViewJfg style={stylesJfg.header}>
      <TextJfg style={stylesJfg.title}>Student Task &amp; Blog App</TextJfg>
    </ViewJfg>
  );
}

const stylesJfg = StyleSheetJfg.create({
  header: {
    padding: 20,
    backgroundColor: "#3F51B5",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
