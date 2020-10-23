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
  },
  categorieContainer: {
    marginTop: 20,
    height: 10,
    width: "90%",
  },
  categorieOptions: {
    justifyContent: 'center', 
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 12,  
    backgroundColor: 'pink',
  },
  startButton: { 
    backgroundColor: "#36575C",
    borderRadius: 30,
    margin: 20,
    marginBottom: "10%",
  },
  buttonText: { 
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 15,
  },
  quizFooter: { 
    height: "10%", // ev uppdatera denna till typ 15% om den ska passa större skärm 
    justifyContent: 'center', 
  },
  quizText: {
    fontSize: 16,
    fontWeight: "bold", 
    padding: 15,
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

  },
  partyPersons: {
    'beratta-livshistoria': require('../assets/beratta-livshistoria.png'),
    'finsmakaren': require('../assets/finsmakaren.png'), //bilden ska bytas ut
    'dryckesspelfantasten': require('../assets/dryckesspelfantasten.png'),
    'gar-inte-dit': require('../assets/gar-inte-dit.png'),
    'startar-dansgolvet': require('../assets/startar-dansgolvet.png'),
    'trubaduren': require('../assets/trubaduren.png'),
  }, 
  prices: {
    'billigt': require('../assets/billigt.png'),
    'mellan': require('../assets/mellan.png'),
    'dyrt': require('../assets/dyrt.png'),
  }

}