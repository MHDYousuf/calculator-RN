import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
	const buttonStyles = [styles.button];
	const textStyles = [styles.text];

	if (theme == "accent") {
		buttonStyles.push(styles.buttonAccent);
		textStyles.push(styles.textAccent);
	}

	return (
		<TouchableOpacity onPress={onPress} style={buttonStyles}>
			<Text style={textStyles}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	text: {
		color: "#fff",
		fontSize: 25,
	},
	// textSecondary: {
	// 	color: "#060606",
	// },
	button: {
		backgroundColor: "transparent",
		flex: 1,
		height: buttonWidth - 10,
		alignItems: "center",
		justifyContent: "center",
		// borderRadius: buttonWidth,
		margin: 5,
	},
	buttonDouble: {
		width: screen.width / 2 - 10,
		flex: 0,
		// alignItems: "flex-start",
		paddingLeft: 40,
	},
	// buttonSecondary: {
	// 	backgroundColor: "#a6a6a6",
	// },
	buttonAccent: {
		backgroundColor: "#faf4bf",
		borderRadius: buttonWidth / 2,
	},
	textAccent: {
		color: "#000",
	},
});
