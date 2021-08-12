import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function ListItem({
  image,
  borrower,
  dueDate,
  nextPayment,
  loanRemaining,
  loanId = null,
}) {
  let navigation = useNavigation();
  return (
    <View style={styles.list}>
      <View style={styles.listDetail}>
        <Image style={styles.listImage} source={image} />
        <View style={styles.listText}>
          <Text style={styles.listText2}>{borrower}</Text>
          <Text style={styles.listText3}>{}</Text>
        </View>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amount2}>{}</Text>
        <Text style={styles.amount3}>${loanRemaining}</Text>
      </View>
      <SimpleLineIcons
        color="#ccc"
        style={styles.listIcon}
        name="arrow-right"
        size={30}
        onPress={() => navigation.navigate("Loan-Payment", { loanId: loanId })}
      />
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
  },
  listImage: {
    width: 30,
    borderRadius: 20,
  },
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
    color: "red",
  },
  amount: {
    flex: 1,
    flexDirection: "row",
  },
  amount2: {
    marginLeft: 5,
  },
  amount3: {
    marginLeft: 50,
  },
  listIcon: {
    fontWeight: "100",
    marginRight: -10,
  },
});
export default ListItem;
