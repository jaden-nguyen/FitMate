import { StyleSheet, View } from "react-native";
import Assistant from "react-native-vector-icons/MaterialCommunityIcons";
import Health from "react-native-vector-icons/Fontisto";
import Nutrition from "react-native-vector-icons/Ionicons";
import Detection from "react-native-vector-icons/Fontisto";
import { horizontalScale } from "../scales";
import SmallText from "./SmallText";
import { TouchableOpacity } from "react-native-gesture-handler";

interface ServicesProps {
  service: string;
  idx: number;
}
const Services = ({ service, idx }: ServicesProps) => {
  return (
    <TouchableOpacity style={styles.box}>
      <View>
        {idx === 0 ? (
          <Assistant name="assistant" size={horizontalScale(80)} />
        ) : idx === 1 ? (
          <Health name="doctor" size={horizontalScale(80)} />
        ) : idx === 2 ? (
          <Nutrition name="nutrition" size={horizontalScale(80)} />
        ) : (
          <Detection name="blood-test" size={horizontalScale(85)} />
        )}
      </View>
      <SmallText text={service} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 175,
    height: 175,
    border: "1px solid #000",
    boxShadow: "2px 2px 2px black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    borderRadius: 15,
    gap: 10,
  },
});

export default Services;
