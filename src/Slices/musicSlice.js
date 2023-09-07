import { createSlice } from "@reduxjs/toolkit";

const initialState = {currentSong: null, isPlaying: false, songList: [],openLibrary: false};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setCurrentSongData: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },
        setLibaryStatus: (state, action) => {
            state.openLibrary = state.openLibrary ? false : true;
        }
    }
});

export const {setCurrentSongData, setIsPlaying,setLibaryStatus} = musicSlice.actions;
export default musicSlice.reducer;