import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ConfirmAge from "../screens/confirm-age";
import MyBev from "../screens/my-bev";
import Quiz1 from "../screens/quiz-1";
import Quiz2 from "../screens/quiz-2";
import Quiz3 from "../screens/quiz-3";
import Quiz4 from "../screens/quiz-4";
import Categories from "../screens/categories";
import Result from "../screens/result";
import Search from "../screens/search";

// Konfigurerar våra sidor för att kunna navigera i stacken
const screens = {
  // Home = Option, screen to show by default pga längst upp här.
  Home: {
    // Navigerar till denna enligt import ovan
    screen: Home,
  },
  ConfirmAge: {
    screen: ConfirmAge,
  },
  MyBev: {
    screen: MyBev,
  },
  Quiz1: {
    screen: Quiz1,
  },
  Quiz2: {
    screen: Quiz2,
  },
  Quiz3: {
    screen: Quiz3,
  },
  Quiz4: {
    screen: Quiz4,
  },
  Categories: {
    screen: Categories,
  },
  Result: {
    screen: Result,
  },
  Search: {
    screen: Search,
  },
};

// HomeStack är vår stack med screens. Får automatiskt en header inkl tillbakaknappar osv med stackNavigator.
const HomeStack = createStackNavigator(screens);

// returns a container with all information in the stack.
export default createAppContainer(HomeStack);
