export type CollectionType = {
  floor: number;
  floor_marketcap: number;
  floor_marketcap_pretty: number;
  holders: number;
  items: number;
  logo: string;
  me_key: string;
  metadata_refresh_ts: number;
  name: string;
  official_rarity: number;
  on_sale: number;
  url: string;
};

export type MintsType = {
  collection: string;
  ranking_url: string;
  twitter: string;
  discord: string;
  website: string;
  description: string;
  logo: string;
  mints: string[];
};
