import { createSlice } from "@reduxjs/toolkit";

const initialState = {currentSong: null, isPlaying: false, songList: []};

const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setCurrentSongData: (state, action) => {
            state.currentSong = action.payload;
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload;
        }
    }
});

export const {setCurrentSongData, setIsPlaying} = musicSlice.actions;
export default musicSlice.reducer;