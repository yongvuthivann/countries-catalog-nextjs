import { countryTransformer } from "@/utils";
import { countryColumns } from "../components/country-columns";
import { CountryDataTable } from "../components/country-table-data";

const getCountries = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = res.json();
  return data;
};

export default async function Home() {
  const countries: ICountry[] = await getCountries();
  const countriesTransformer = countries?.map((country) =>
    countryTransformer(country)
  );

  return (
    <main className="flex min-h-screen max-w-7xl p-5 mx-auto flex-col">
      <div className="tracking-tight">
        <h1 className="font-semibold text-xl md:text-2xl">Countries Catalog</h1>
        <p className="text-xs md:text-sm mt-.5">
          <span className="text-slate-500">
            List all countries catalog in a table. Resource:{" "}
          </span>
          <a
            className="text-blue-600 underline"
            href="https://restcountries.com/"
            target="__blank"
          >
            Rest Countries
          </a>
        </p>
      </div>

      <div className="mt-2">
        <CountryDataTable
          columns={countryColumns}
          data={countriesTransformer}
        />
      </div>
    </main>
  );
}
