// chatbotLogic.js
import axios from "axios";

export const sendMessage = async (message) => {
  if (!message.Body) {
    throw new Error("Message must have a Body field.");
  }
  try {
    const response = await axios.post(
      "http://localhost:3000/whatsapp",
      message
    );
    console.log(response, "--------------response of the whatsapp-----");
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const getImage = async (setCompanyLogo, setCompanyName) => {
  const userId = "66601a4bb66da9b2a3f7d4a6";
  try {
    const response = await axios.get(`http://localhost:3000/image/${userId}`);
    const imageData = response.data.data;
    setCompanyLogo(imageData.url);
    setCompanyName(imageData.name);
  } catch (error) {
    console.error("Error fetching image:", error);
  }
};
