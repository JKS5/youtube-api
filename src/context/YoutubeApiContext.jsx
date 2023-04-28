import { createContext, useContext } from "react";
// import FakeYoutubeClient from "../apis/fakeYoutubeClient";
import Youtube from "../apis/youtube";
import YoutubeClient from "../apis/youtubeClient";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
