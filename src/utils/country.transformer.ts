export const countryTransformer = (country: ICountry): ITransformCountry => {
  const firstNativeName = country?.name?.nativeName
    ? Object.values(country.name.nativeName)[0].official
    : "";

  const firstNativeNameKey = country?.name?.nativeName
    ? Object.keys(country.name.nativeName)[0]
    : null;

  const nativeName = firstNativeName + " - " + firstNativeNameKey;
  const suffixMap = country.idd?.suffixes
    ? country.idd?.suffixes?.map((suffix) => country.idd.root + suffix)
    : [country.idd.root];

  const countryCode: string =
    suffixMap.length > 0 ? suffixMap.join(", ") : suffixMap.join("");

  const transform: ITransformCountry = {
    name: country?.name.official,
    nativeName,
    cca2: country.cca2,
    cca3: country.cca3,
    altSpellings: country?.altSpellings
      ? country.altSpellings.join(", ")
      : "N/A",
    idd: countryCode,
    flag: country.flags.png,
  };

  return transform;
};
