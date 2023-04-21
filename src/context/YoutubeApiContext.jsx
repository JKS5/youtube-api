import { createContext, useContext } from "react";
import Youtube from "../apis/youtube";
import FakeYoutube from "../apis/fakeYoutube";
export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube(); //new Youtube();

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
