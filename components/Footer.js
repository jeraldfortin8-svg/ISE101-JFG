import { View as ViewJfg, Text as TextJfg, StyleSheet as StyleSheetJfg } from "react-native";

export default function FooterJfg() {
  return (
    <ViewJfg style={stylesJfg.footer}>
      <TextJfg style={stylesJfg.text}>© 2025 Student App Project</TextJfg>
    </ViewJfg>
  );
}

const stylesJfg = StyleSheetJfg.create({
  footer: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#555555",
  },
});
