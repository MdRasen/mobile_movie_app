import { Image, TextInput, TouchableOpacity } from "react-native";
import { icons } from "../constants/icons";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    // Wrapped in TouchableOpacity to make the whole bar clickable
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className="flex-row items-center bg-dark-200 rounded-full px-5 py-4"
    >
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
        pointerEvents={onPress ? "none" : "auto"} // Disables input focus if it's acting as a button
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
