export interface CountriesResponse {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages?:   { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
  gini?:        { [key: string]: number };
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  EUR?: TartuGecko;
  LAK?: TartuGecko;
  CAD?: TartuGecko;
  NGN?: TartuGecko;
  VUV?: TartuGecko;
  CZK?: TartuGecko;
  MWK?: TartuGecko;
  XOF?: TartuGecko;
  ISK?: TartuGecko;
  NOK?: TartuGecko;
  XCD?: TartuGecko;
  CLP?: TartuGecko;
  BMD?: TartuGecko;
  KWD?: TartuGecko;
  USD?: TartuGecko;
  XAF?: TartuGecko;
  LKR?: TartuGecko;
  CNY?: TartuGecko;
  BDT?: TartuGecko;
  SEK?: TartuGecko;
  TRY?: TartuGecko;
  GNF?: TartuGecko;
  TZS?: TartuGecko;
  RWF?: TartuGecko;
  SGD?: TartuGecko;
  MAD?: TartuGecko;
  IQD?: TartuGecko;
  BND?: TartuGecko;
  GBP?: TartuGecko;
  IMP?: TartuGecko;
  KPW?: TartuGecko;
  IRR?: TartuGecko;
  ANG?: TartuGecko;
  PYG?: TartuGecko;
  ALL?: TartuGecko;
  TJS?: TartuGecko;
  BOB?: TartuGecko;
  COP?: TartuGecko;
  BZD?: TartuGecko;
  MMK?: TartuGecko;
  XPF?: TartuGecko;
  BRL?: TartuGecko;
  SOS?: TartuGecko;
  AFN?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  DZD?: TartuGecko;
  MRU?: TartuGecko;
  ERN?: TartuGecko;
  KHR?: TartuGecko;
  BSD?: TartuGecko;
  BYN?: TartuGecko;
  AUD?: TartuGecko;
  TVD?: TartuGecko;
  SHP?: TartuGecko;
  BGN?: TartuGecko;
  MZN?: TartuGecko;
  INR?: TartuGecko;
  PEN?: TartuGecko;
  BIF?: TartuGecko;
  HNL?: TartuGecko;
  TOP?: TartuGecko;
  SAR?: TartuGecko;
  SRD?: TartuGecko;
  QAR?: TartuGecko;
  GIP?: TartuGecko;
  MUR?: TartuGecko;
  BBD?: TartuGecko;
  SYP?: TartuGecko;
  EGP?: TartuGecko;
  STN?: TartuGecko;
  KID?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  SBD?: TartuGecko;
  LYD?: TartuGecko;
  KRW?: TartuGecko;
  CHF?: TartuGecko;
  NIO?: TartuGecko;
  MVR?: TartuGecko;
  KGS?: TartuGecko;
  KES?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  PLN?: TartuGecko;
  ETB?: TartuGecko;
  BAM?: BAM;
  UYU?: TartuGecko;
  CVE?: TartuGecko;
  HTG?: TartuGecko;
  YER?: TartuGecko;
  SZL?: TartuGecko;
  ZWL?: TartuGecko;
  ILS?: TartuGecko;
  FJD?: TartuGecko;
  UAH?: TartuGecko;
  HKD?: TartuGecko;
  BTN?: TartuGecko;
  NPR?: TartuGecko;
  AED?: TartuGecko;
  GGP?: TartuGecko;
  DOP?: TartuGecko;
  RSD?: TartuGecko;
  BWP?: TartuGecko;
  GHS?: TartuGecko;
  KMF?: TartuGecko;
  AZN?: TartuGecko;
  JOD?: TartuGecko;
  TWD?: TartuGecko;
  DJF?: TartuGecko;
  DKK?: TartuGecko;
  PGK?: TartuGecko;
  MGA?: TartuGecko;
  HUF?: TartuGecko;
  TTD?: TartuGecko;
  GMD?: TartuGecko;
  ARS?: TartuGecko;
  CDF?: TartuGecko;
  IDR?: TartuGecko;
  LBP?: TartuGecko;
  MYR?: TartuGecko;
  KYD?: TartuGecko;
  AMD?: TartuGecko;
  MNT?: TartuGecko;
  JPY?: TartuGecko;
  PHP?: TartuGecko;
  JMD?: TartuGecko;
  MOP?: TartuGecko;
  FOK?: TartuGecko;
  GYD?: TartuGecko;
  SDG?: BAM;
  RUB?: TartuGecko;
  LRD?: TartuGecko;
  MXN?: TartuGecko;
  TND?: TartuGecko;
  AWG?: TartuGecko;
  KZT?: TartuGecko;
  OMR?: TartuGecko;
  TMT?: TartuGecko;
  SLL?: TartuGecko;
  WST?: TartuGecko;
  GEL?: TartuGecko;
  NAD?: TartuGecko;
  SSP?: TartuGecko;
  THB?: TartuGecko;
  BHD?: TartuGecko;
  FKP?: TartuGecko;
  JEP?: TartuGecko;
  VND?: TartuGecko;
  GTQ?: TartuGecko;
  MDL?: TartuGecko;
  MKD?: TartuGecko;
  UZS?: TartuGecko;
  RON?: TartuGecko;
  UGX?: TartuGecko;
  ZMW?: TartuGecko;
  PKR?: TartuGecko;
  PAB?: TartuGecko;
  AOA?: TartuGecko;
  VES?: TartuGecko;
  CRC?: TartuGecko;
  SCR?: TartuGecko;
}

export interface TartuGecko {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:      string;
  official:    string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
