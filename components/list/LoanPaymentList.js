import React from "react";
import { View, StyleSheet, Text } from "react-native";

function LoanPaymentList({ dueDate, loanRemaining }) {
  return (
    <View style={styles.list}>
      <View style={styles.listDetail}>
        <View style={styles.listText}>
          <Text style={styles.listText3}>{dueDate}</Text>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amount3}>{loanRemaining}</Text>
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
    paddingVertical: 5,
    paddingVertical: 10,
  },
  listImage: {},
  listDetail: {
    flex: 5,
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
  },
  amount: {
    flex: 1,
    flexDirection: "row",
  },
  amount2: {
    marginLeft: 5,
  },
  amount3: {
    textAlign: "center",
  },
  listIcon: {
    fontWeight: "100",
    marginRight: -10,
  },
});
export default LoanPaymentList;
