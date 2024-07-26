interface IName {
  common: string;
  official: string;
  nativeName: {
    eng: {
      official: string;
      common: string;
    };
  };
}

interface IFlag {
  png: string;
}

interface IDD {
  root: string;
  suffixes: string[];
}

interface ICountry {
  name: IName;
  cca2: string;
  cca3: string;
  altSpellings: string[];
  idd: IDD;
  flags: IFlag;
}

interface ITransformCountry {
  name: string;
  nativeName: string;
  cca2: string;
  cca3: string;
  altSpellings: string;
  idd: string;
  flag: string;
}
