export default function (injectDeps, { localeRoutes }) {
  import React from 'react';
  import { mount } from 'react-mounter';
  import lazyLoad from './libs/lazy_load';

  const MainLayout = lazyLoad(() => import('./containers/main_layout'));
  const Home = lazyLoad(() => import('./components/home.jsx'));
  const RegisterForm = lazyLoad(() => import('../registration/containers/register_form'));
  const Login = lazyLoad(() => import('../account/containers/login'));
  const AvatarStage = lazyLoad(() => import('../avatar/containers/stage'));
  const AvatarSVG = lazyLoad(() => import('../avatar/containers/avatar_svg'));
  const MainLayoutCtx = injectDeps(MainLayout);
  localeRoutes.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        propsNotLoggedIn: {
          content: () => <Login />,
        },
        content: () => <Home />,

      });
    },
  });
  localeRoutes.route('/avatar/:avatarId', {
    name: 'avatar',
    action({ avatarId }) {
      mount(MainLayoutCtx, {
        propsNotLoggedIn: {
          content: () => <Login />,
        },
        content: () => <AvatarStage avatarId={avatarId} />,
      });
    },
  });
  localeRoutes.route('/avatar/:avatarId/svg', {
    name: 'avatar.svg',
    action({ avatarId }) {
      mount(MainLayoutCtx, {
        propsNotLoggedIn: {
          content: () => <Login />,
        },
        content: () => <AvatarSVG avatarId={avatarId} />,
      });
    },
  });
  localeRoutes.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => <RegisterForm />,
        propsLoggedIn: {
          content: () => <p>Already logged in</p>,
        },
      });
    },
  });
  localeRoutes.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => <Login />,
        propsLoggedIn: {
          content: () => <p>Already logged in</p>,
        },
      });
    },
  });
}
