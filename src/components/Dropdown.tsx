import React from "react";
import { StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DropdownComponent = () => {
  console.log("in dropdown");

  return (
    <View>
      <DropDownPicker
        items={[
          {
            label: "User",
            value: "user",
            icon: () => (
              <MaterialCommunityIcons name="account" size={18} color="#900" />
            ),
          },
          {
            label: "Repository",
            value: "repository",
            icon: () => (
              <MaterialCommunityIcons
                name="folder-multiple"
                size={18}
                color="#900"
              />
            ),
          },
        ]}
        // defaultValue={this.state.country}
        containerStyle={{ height: 40 }}
        style={styles.dropdown}
        // style={{ backgroundColor: "#fafafa" }}
        itemStyle={{
          justifyContent: "flex-start",
        }}
        dropDownStyle={{ backgroundColor: "#fafafa" }}
        onChangeItem={(item) =>
          console.log("item current value is ", item.value)
        }
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // bottom: 30,
  },
  dropdown: {
    // borderColor: "black",
    // backgroundColor: "#fff",
  },
});
