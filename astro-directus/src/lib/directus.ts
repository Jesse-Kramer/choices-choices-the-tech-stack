import { createDirectus, rest, } from '@directus/sdk';

type Account = {
  name: string;
  email: string;
  password: string;
}

type Schema = {
  account: Account[];
}

const directus = createDirectus<Schema>('https://fdnd-agency.directus.app').with(rest());

export default directus;