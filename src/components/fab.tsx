import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";

interface Props {
  title: string;
  position?: "br" | "bl";
  onPress: () => void;
}

export const Fab = ({ title, onPress, position = "br" }: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
      activeOpacity={ 0.75 }
        style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.rigth,
        ]}

        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === "bl" ? styles.left : styles.rigth,
        ]}
      >
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple("#28425b", false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android()
};

const styles = StyleSheet.create({
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  left: {
    left: 25,
  },

  rigth: {
    right: 25,
  },

  fab: {
    backgroundColor: "#5856d6",
    borderRadius: 100,
    height: 60,
    width: 60,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  fabText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
