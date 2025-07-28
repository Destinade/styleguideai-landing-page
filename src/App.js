import Screen from "./components/Screen/Screen";
import Text from "./components/Text/Text";
import Button from "./components/Button/Button";
import Image from "./components/Image/Image";
import "./components/Text/Text.css";
import "./components/Image/Image.css";

function App() {
	return (
		<Screen>
			<Text className="text-style-assistant" text="Style Assistant" />
			<Text
				className="text-through-al-innovation"
				text="Through Al Innovation"
			/>
			<Button />
			<Image
				className="image-style-assistant"
				image="https://assets.api.uizard.io/api/cdn/stream/0eb430b5-14b1-46a6-b6f6-72896d782dfa.png"
			/>
			<Text className="text-get-dressed" text="Get Dressed" />
			<Text className="text-get-noticed" text="Get Noticed" />
			<Image
				className="image-get-dressed"
				image="https://assets.api.uizard.io/api/cdn/stream/c441d916-9fee-46ce-bb67-e0964d915ebd.png"
			/>
			<Image
				className="image-get-noticed"
				image="https://assets.api.uizard.io/api/cdn/stream/07e88047-38fc-40c0-aa27-d5f0bb5c71f7.png"
			/>
		</Screen>
	);
}

export default App;
