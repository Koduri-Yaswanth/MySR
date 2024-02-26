import {createNavigationContainerRef} from '@react-navigation/native';
import {CommonActions, ParamListBase} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<ParamListBase>();

export const navigate = (name: string, params?: Record<string, unknown>) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
export const goBack = () => {
  if (navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};

export const resetAndNavigate = (routeName: string, screenParams?: unknown) => {
  navigationRef.dispatch(
    CommonActions.navigate({
      name: routeName as never,
      params: screenParams as never,
    }),
  );
};

export const previousRouteName = (navigation: any) => {
  const navRoutes = navigation.dangerouslyGetParent().state.routes;
  if (navRoutes.length >= 2) {
    return navRoutes[navRoutes.length - 2].routeName;
  }
  return navigation.state.routeName;
};
