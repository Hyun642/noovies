import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import styled from "styled-components/native";

const Movies: React.FC<NativeStackScreenProps<any, "Movie">> = ({ navigation: { navigate } }) => (
     <Btn onPress={() => navigate("Stack", { screen: "Three" })}>
          <Title>Movies</Title>
     </Btn>
);

const Btn = styled.TouchableOpacity`
     flex: 1;
     justify-content: center;
     align_items: center;
     background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
     color: ${(props) => props.theme.textColor};
`;

export default Movies;
