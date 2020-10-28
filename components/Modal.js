import React, { useState, useEffect } from "react";
import {
	Alert,
	Modal,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";

export default (props) => {
	const [modalVisible, setModalVisible] = useState(props);
	console.log(props);

	useEffect(() => {
		setModalVisible(props);
	}, [props]);
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
			}}
		>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>Hello World!</Text>

					<TouchableHighlight
						style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
						onPress={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<Text style={styles.textStyle}>Hide Modal</Text>
					</TouchableHighlight>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
});
