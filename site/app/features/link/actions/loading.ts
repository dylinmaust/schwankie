import {createAction} from '@reduxjs/toolkit';
import {Link} from '../types';

export enum LinksLoadingActions {
  StartLoading = 'LINKS/START_LOADING',
  LinksLoaded = 'LINKS/LOADED',
  MoreLinksLoaded = 'LINKS/MORE_LOADED',
  StopLoading = 'LINKS/STOP_LOADING',
}

export const startLoading = createAction(LinksLoadingActions.StartLoading);
export const linksLoaded = createAction<Link[]>(LinksLoadingActions.LinksLoaded);
export const moreLinksLoaded = createAction<Link[]>(LinksLoadingActions.MoreLinksLoaded);
export const stopLoading = createAction(LinksLoadingActions.StopLoading);
