import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import MovieCard from "../../../components/MovieCard";
import SearchBar from "../../../components/SearchBar";
import { icons } from "../../../constants/icons";
import { images } from "../../../constants/images";
import { fetchMovies } from "../../../services/api";
import useFetch from "../../../services/useFetch";

export default function Index() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute z-0"
        style={{ width, height }}
        resizeMode="stretch"
      />

      <FlatList
        data={moviesLoading || moviesError ? [] : movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        className="px-5"
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        ListHeaderComponent={
          <>
            <Image
              source={icons.logo}
              className="w-12 h-10 mt-20 mb-5 mx-auto"
            />

            <View className="mt-5 mb-5">
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search movies, TV shows..."
                value=""
                onChangeText={() => {}}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#ab8bff"
                className="mt-10 self-center"
              />
            )}

            {moviesError && (
              <Text className="text-red-500 mt-5 text-center font-bold">
                Error: {moviesError?.message}
              </Text>
            )}

            {!moviesLoading && !moviesError && movies && movies.length > 0 && (
              <Text className="text-lg text-white font-bold mb-3 mt-2">
                Latest Movies
              </Text>
            )}
          </>
        }
      />
    </View>
  );
}
