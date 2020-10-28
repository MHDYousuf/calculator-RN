import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	SafeAreaView,
	Modal,
	TouchableHighlight,
	Dimensions,
} from "react-native";
import Col from "./components/Col";
import Button from "./components/Button";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	const [modalVisible, setModalVisible] = useState(true);

	const handleEqual = () => {
		try {
			setInputValue(
				String(eval(inputValue)).length > 3 &&
					String(eval(inputValue)).includes(".")
					? String(eval(inputValue).toFixed(4))
					: String(eval(inputValue))
			);
		} catch (error) {
			console.log(error);
		}
	};

	const handleInput = (value) => {
		console.log(value);
		setInputValue(inputValue + value);
	};
	console.log(inputValue);

	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			{/* <SafeAreaView> */}
			{inputValue === "1+3+9" && (
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World</Text>
					</View>
				</View>
			)}
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: "flex-end" }}>
					<Text style={styles.value}>{inputValue}</Text>
				</View>
				<View style={styles.btnContainer}>
					<Col>
						<Button
							text="C"
							theme="secondary"
							value=""
							onPress={() => setInputValue("")}
						/>
						<Button text="7" value="7" onPress={() => handleInput("7")} />
						<Button text="4" value={4} onPress={(e) => handleInput("4")} />
						<Button text="1" value={1} onPress={(e) => handleInput("1")} />
						<Button text="." value="." onPress={() => handleInput(".")} />
					</Col>
					<Col>
						<Button
							text="+/-"
							theme="secondary"
							onPress={() => console.log("+/-")}
						/>
						<Button text="8" value={8} onPress={(e) => handleInput("8")} />
						<Button text="5" value={5} onPress={(e) => handleInput("5")} />
						<Button text="2" value={2} onPress={(e) => handleInput("2")} />
						<Button text="0" value={0} onPress={() => handleInput("0")} />
					</Col>
					<Col>
						<Button
							text="%"
							value="%"
							theme="secondary"
							onPress={() => handleInput("%")}
						/>
						<Button text="9" value={9} onPress={(e) => handleInput("9")} />
						<Button text="6" value={6} onPress={(e) => handleInput("6")} />
						<Button text="3" value={3} onPress={(e) => handleInput("3")} />
						<Button text="00" value={0} onPress={() => handleInput("00")} />
					</Col>
					<Col>
						<View
							style={{
								flex: 1,
								backgroundColor: "#111111",
								borderRadius: 30,
								marginHorizontal: 15,
							}}
						>
							<Button text="/" value="/" onPress={() => handleInput("/")} />

							<Button text="x" onPress={() => console.log("x")} />
							<Button text="-" onPress={() => handleInput("-")} />
							<Button text="+" value="+" onPress={() => handleInput("+")} />
							<Button text="=" value="=" theme="accent" onPress={handleEqual} />
						</View>
					</Col>
				</View>
			</View>
			{/* </SafeAreaView> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#202020",
		padding: 15,
	},
	value: {
		color: "#fff",
		fontSize: 40,
		textAlign: "right",
		marginRight: 20,
		marginBottom: 10,
	},
	centeredView: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "gray",
		borderRadius: 20,
		padding: 35,
		paddingVertical: 100,
		// alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		opacity: 0.9,
	},
	modalText: {
		fontSize: 30,
		color: "#fff",
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},

	btnContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		marginBottom: 10,
		borderTopWidth: 1,
		borderTopColor: "#111111",
		paddingTop: 15,
	},
});
