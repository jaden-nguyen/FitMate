import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import DashboardNav from "../components/navbar/DashboardNav";
import { useEffect, useState } from "react";
import { StackProps } from "../types";
import Subheading from "../components/Subheading";
import Heading from "../components/Heading";
import { horizontalScale, verticalScale } from "../scales";
import { colors } from "../colors";
import Services from "../components/Services";
import SmallText from "../components/SmallText";
import Icon from "react-native-vector-icons/AntDesign";

const Dashboard: React.FC<StackProps> = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const services = [
    "AI Health Assistant",
    "Health guidance",
    "Nutritional plans",
    "Potential health issues",
  ];
  const name = "John";

  useEffect(() => {
    const date = getCurrentPSTTime();
    TimeofDay(date);
  }, [timeOfDay]);

  const TimeofDay = (date: string) => {
    const hour = Number(date.slice(0, 2));

    if (hour < 12) {
      setTimeOfDay("morning");
    } else if (hour > 16) {
      setTimeOfDay("evening");
    } else {
      setTimeOfDay("afternoon");
    }
  };

  const getCurrentPSTTime = () => {
    const currentTime = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: "America/Los_Angeles",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    return currentTime.toLocaleString("en-US", options);
  };

  return (
    <SafeAreaView>
      <DashboardNav />
      <View style={styles.container}>
        <View style={styles.heading}>
          <Subheading green text={`Good ${timeOfDay},`} />
          <Heading text={name} />
        </View>
        <Image
          source={require("../../../assets/logo1.png")}
          style={styles.image}
        />
        <View style={styles.onboarding}>
          <View style={styles.subcontainer}>
            <SmallText text="First thing you should do is " />
            <TouchableOpacity>
              <SmallText text="verify your email." link />
            </TouchableOpacity>
          </View>
          <View style={styles.subcontainer}>
            <SmallText text="Then, enter your health information in this" />
            <TouchableOpacity>
              <SmallText text="virtual wellness visit." link />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.services}>
        <Subheading text="Services" />
      </View>
      <TouchableOpacity style={styles.seeAll}>
        <SmallText text="See All" bold />
        <Icon name="right" size={16} />
      </TouchableOpacity>
      <View style={styles.grid}>
        {services.map((service, i) => (
          <Services key={i} idx={i} service={service} />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background_gray,
  },
  heading: {
    padding: 20,
    margin: 10,
  },
  image: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: "contain",
    position: "absolute",
    right: 0,
    top: 15,
  },
  subcontainer: {
    borderWidth: 2,
    borderColor: colors.secondary_green,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  onboarding: {
    paddingTop: 60,
    gap: 15,
    paddingHorizontal: 20,
    paddingBottom: 10,
    margin: 10,
  },
  services: {
    display: "flex",
    alignItems: "center",
    margin: 4,
    padding: 4,
  },
  seeAll: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 395,
    padding: 5,
    gap: 5,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
  },
});

export default Dashboard;
