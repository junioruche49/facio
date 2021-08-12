import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import colors from "../../config/colors";
import CustomBtnSmall from "../CustomBtnSmall";

function NotificationList({ image, borrower, dueDate, onPress }) {
  return (
    <View style={styles.list}>
      <View style={styles.listDetail}>
        <Image style={styles.listImage} source={image} />
        <View style={styles.listText}>
          <Text style={styles.listText2}>{borrower}</Text>
          <Text style={styles.listText3}>{dueDate}</Text>
        </View>
      </View>
      <View style={styles.amount}>
        {/* <Text style={styles.amount2}>{totalLoan}</Text> */}
        <View style={styles.btnWidth}>
          <CustomBtnSmall
            title="Confirm"
            color={colors.white}
            bgColor={true}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 12,
    alignItems: "center",
    borderTopColor: "#cfcfcf",
    borderTopWidth: 1,
    borderBottomColor: "#cfcfcf",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  listImage: {},
  listDetail: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  listText: {
    marginLeft: 10,
    fontWeight: "200",
  },
  listText2: {
    fontWeight: "400",
  },
  listText3: {
    fontWeight: "200",
    fontSize: 12,
  },
  amount: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  amount2: {
    marginLeft: -10,
  },
  btnWidth: {
    marginLeft: 30,
  },
});
export default NotificationList;
