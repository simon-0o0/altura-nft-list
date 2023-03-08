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
  items: MintItemType[];
  owners: Record<string, string>;
};

export type MintItemType = {
  id: number;
  mint: string;
  link: string;
  name: string;
  description: string;
  image: string;
  attributes: { name: string; value: number; rarity: string }[];
  rank: number;
  rank_algo: string;
};

export type NftExternalMetaDataType = {
  attributes: { trait_type: string; value: string }[];
  collection: { name: string; family: string };
  description: string;
  external_url: string;
  image: string;
  name: string;
  properties: {
    category: string;
    creators: { address: string; share: number }[];
    files: { type: string; uri: string }[];
  };
  seller_fee_basis_points: number;
  symbol: string;
};
