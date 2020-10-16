import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  quizContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  header: {},
  quizAnswers: {

  },
  quizAnswer: {
    marginHorizontal: 5,
    marginVertical: 5

  }
});

// För att kunna ha olika bilder på quiz-frågorna
export const images = {
  situations: {
    'me-time': require('../assets/me-time.png'),
    'dinner-friends': require('../assets/dinner-friends.png'),
    'boardgame': require('../assets/boardgame.png'),
    'party': require('../assets/party.png'),
    'dinner-romantic': require('../assets/dinner-romantic.png'),
    'BBQ': require('../assets/BBQ.png'),
  },
  characters: {
    'snalla-puh': require('../assets/snalla-puh.png'),
    'know-it-all-hermione': require('../assets/know-it-all-hermione.png'),
    'festsugna-annie': require('../assets/festsugna-annie.png'),
    'hungriga-gustaf': require('../assets/hungriga-gustaf.png'),
    'aventyrliga-dora': require('../assets/aventyrliga-dora.png'),
    'flortiga-barney': require('../assets/flortiga-barney.png'),

  }

}