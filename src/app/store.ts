import { GOTO_BIO_PAGE, GOTO_LANDING_PAGE, GOTO_MUN_PAGE } from './actions';

export interface IAppState {
    page: 'landing' | 'MUN' | 'bio';
}

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case GOTO_BIO_PAGE:
            return { page: 'bio' };
        case GOTO_LANDING_PAGE:
            return { page: 'landing' };
        case GOTO_MUN_PAGE:
            window.location.href="https://nicholashartunian.com/projects/MUNGen/";
            return { page: 'MUN' };
    }
    return state;
}

export const INITIAL_STATE: IAppState = {
    page: 'landing'
};