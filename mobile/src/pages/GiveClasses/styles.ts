import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 24,
    lineHeight: 33,
    maxWidth: 210,
  },

  description: {
    marginTop: 22,
    color: "#d4c2ff",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins_400Regular",
    maxWidth: 240,
  },

  okButton: {
    marginVertical: 20,
    backgroundColor: "#04d361",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  okButtonText: {
    color: "#FFF",
    fontSize: 14,
    fontFamily: "Archivo_700Bold",
  },
});

export default styles;
