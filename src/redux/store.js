import { configureStore } from '@reduxjs/toolkit';
import { commitReducer } from './slice/Commit/commit';
import { projectReducer } from './slice/Project/project';
import { userLoginReducer } from './slice/User/searchLogin';

const store = configureStore({
    reducer: {
        user: userLoginReducer,
        project: projectReducer,
        commit: commitReducer,
    },
})
 
export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;