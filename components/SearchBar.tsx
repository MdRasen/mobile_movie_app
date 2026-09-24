import { Image, TextInput, TouchableOpacity } from "react-native";
import { icons } from "../constants/icons";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, value, onChangeText, onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
      disabled={!onPress}
      className="flex-row items-center px-5 py-4"
      style={{
        backgroundColor: "rgba(18, 18, 37, 0.6)",
        borderRadius: 9999,
      }}
    >
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 pl-3 text-white text-base"
        editable={!onPress}
        pointerEvents={onPress ? "none" : "auto"}
        underlineColorAndroid="transparent"
        style={{ outlineStyle: "none" } as any}
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
