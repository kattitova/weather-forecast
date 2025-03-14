import { RootState } from '../store';
import { ICurrentCityData } from '../types/store/cities/types';

export const loadState = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      const data: ICurrentCityData[] = JSON.parse(item);
      return { cities: { data } };
    }
  } catch (error) {
    console.log('Error reading from localStorage', error);
    return undefined;
  }
};

export const saveState = (state: RootState, key: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(state.cities.data));
  } catch (error) {
    console.log('Error saving localStorage', error);
  }
};
