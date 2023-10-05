import { CreateUser } from '@schemas/createUser';

import { selfHost } from './index';

async function createUserService(requestBody: CreateUser) {
  const { data } = await selfHost.post('/users/create', requestBody);

  return data;
}

export default createUserService;
