import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {},
  bodyText: {
    textAlign: "center",
    fontSize: 16,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 20,
    marginBottom: 20,
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
  quizContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  quizText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    padding: 50,
  },
  quizAnswer: {
    marginHorizontal: 5,
    marginVertical: 5
  },
  quizAnsImg: {
    height: 170,
    width: 170
  },
  quizFooter: {
    height: "15%",
    alignSelf: 'center',
    justifyContent: 'center',
  },
  navbarContainer: {
    height: 50
  },
  navbarImg: {
    flex: 1,
    alignSelf: "center",
    resizeMode: 'contain',
  },
  categorieContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20, // lägg till detta i huvudcontainern för result också 
  },
  categorieOptions: {
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 12,
    backgroundColor: 'pink',
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