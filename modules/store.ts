import { AnyAction, CombinedState, configureStore, combineReducers } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE  } from 'next-redux-wrapper'
import logger from 'redux-logger';
import articleReducer  from '@/modules/articles';
import { IArticleState } from './articles'
import { IBoardState } from './boards';
import { IClosetState } from './closets';
import { IClothesState } from './clothes';
import { IColorState } from './colors';
import { IEventState } from './events';
import { IStyleState } from './styles';
import { IUserState } from './users';
import { IWeatherState } from './weathers';
const isDev = process.env.NODE_ENV ==='development'


interface RootStates {
	article: IArticleState;
    board: IBoardState;
    closet: IClosetState;
    clothes: IClothesState;
    color: IColorState;
    event: IEventState;
    style: IStyleState;
    user: IUserState;
    weather: IWeatherState;
}

const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type ===HYDRATE){
        return {
            ...state, ...action.payload
        }
    }
    return combineReducers({
        article: articleReducer
    })(state, action);
 
}


const makeStore = () =>
    configureStore({
        reducer:{rootReducer},
        middleware: getDefaultMiddleware =>
            isDev? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
            devTools: isDev
    });

export const wrapper = createWrapper(makeStore, {debug: isDev})

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
