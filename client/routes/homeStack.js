import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, Button } from "react-navigation";
import HomeHeader from "../components/homeHeader";
import React from "react";
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
    /*navigationOptions: {
      headerTitle: () => <HomeHeader />
    }*/
    navigationOptions: {
      title: "",
      headerShown: false,

    }
  },
  ConfirmAge: {
    screen: ConfirmAge,
  },
  MyBev: {
    screen: MyBev,
    navigationOptions: {
      title: "Mina drycker",
    }
  },
  Quiz1: {
    screen: Quiz1,
    navigationOptions: {
      title: "",
    }
  },
  Quiz2: {
    screen: Quiz2,
    navigationOptions: {
      title: "",
    }
  },
  Quiz3: {
    screen: Quiz3,
    navigationOptions: {
      title: "",
    }
  },
  Quiz4: {
    screen: Quiz4,
    navigationOptions: {
      title: "",
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      title: "",
    }
  },
  Result: {
    screen: Result,
    navigationOptions: {
      title: "",
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      title: "Välj bolag",
    }
  },
};

// HomeStack är vår stack med screens. Får automatiskt en header inkl tillbakaknappar osv med stackNavigator.
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { height: 100 }
  }
});

// returns a container with all information in the stack.
export default createAppContainer(HomeStack);
