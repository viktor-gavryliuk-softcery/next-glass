import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import faqData, { FAQCategory } from '@/data/faqData';

interface FAQState {
    faqData: FAQCategory[];
    activePage: number;
}

const initialState: FAQState = {
    faqData: faqData,
    activePage: 0,
};

const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<number>) => {
            state.activePage = action.payload;
        },
    },
});

export const { setActivePage } = faqSlice.actions;
export default faqSlice.reducer;
