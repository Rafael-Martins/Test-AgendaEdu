import { AsyncStorage } from "react-native";

const BASE_URL = "https://frontend-test.agendaedu.com/api/";

export default {
  login: async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password
        })
      });

      if (response.ok) {
        const { token } = await response.json();
        try {
          await AsyncStorage.setItem("token", token);
        } catch (error) {
          console.log(error);
        }

        return token;
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  },

  getEvents: async () => {
    try {
      const response = await fetch(`${BASE_URL}/events?limit=2;page=1`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: await AsyncStorage.getItem("token")
        }
      });

      if (response.ok) {
        return await response.json();
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  }
};
