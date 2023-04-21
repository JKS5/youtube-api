import { createContext, useContext } from "react";
import FakeYoutube from "../apis/fakeYoutube";

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext value={{ youtube }}>{children}</YoutubeApiContext>;
}

export function youtubeApi() {
  return useContext(YoutubeApiContext);
}

// import { createContext, useContext } from "react";
// import Youtube from "../apis/youtube";
// import FakeYoutube from "../apis/fakeYoutube";
// export const YoutubeApiContext = createContext();

// const youtube = new FakeYoutube(); //new Youtube();

// export function YoutubeApiProvider({ children }) {
//   return (
//     <YoutubeApiContext.Provider value={{ youtube }}>
//       {children}
//     </YoutubeApiContext.Provider>
//   );
// }
// export function useYoutubeApi() {
//   return useContext(YoutubeApiContext);
// }
