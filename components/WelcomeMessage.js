import { Text as TextJfg, StyleSheet as StyleSheetJfg } from "react-native";

export default function WelcomeMessageJfg() {
  return (
    <>
      <TextJfg style={stylesJfg.text}>Hello, JFG!</TextJfg>
      <TextJfg style={stylesJfg.text}>BSIS Section JFG</TextJfg>
    </>
  );
}

const stylesJfg = StyleSheetJfg.create({
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
