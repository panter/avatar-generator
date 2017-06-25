import React from 'react';
import styled from 'styled-components';

import AllUsersAvatarsList from
  '../../avatar/containers/all_users_avatars_list';
import CreateButton from '../../avatar/containers/create_button';
import LogoutButton from '../../account/containers/logout_button';
import MyAvatarList from '../../avatar/containers/my_avatar_list';


const HomeBase = styled.div`

  display: flex;
  flex-direction: column;
`;


const Home = () => (
  <HomeBase>
    <LogoutButton />
    <CreateButton />
    <MyAvatarList />
    <p>All avatars: </p>
    <AllUsersAvatarsList excludeMine />
  </HomeBase>
);


export default Home;
