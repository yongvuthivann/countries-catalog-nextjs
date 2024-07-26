"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";

export const countryColumns: ColumnDef<ITransformCountry>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <p>{row.getValue("name")}</p>,
  },

  {
    accessorKey: "flag",
    header: "Flag",
    cell: ({ row }) => (
      <Image
        src={row.getValue("flag")}
        alt="country flag"
        width={30}
        height={30}
      />
    ),
  },

  {
    accessorKey: "cca2",
    header: "CCA2",
    cell: ({ row }) => <p>{row.getValue("cca2")}</p>,
  },

  {
    accessorKey: "cca3",
    header: "CCA3",
    cell: ({ row }) => <p>{row.getValue("cca3")}</p>,
  },

  {
    accessorKey: "nativeName",
    header: "Native Name",
    cell: ({ row }) => <p>{row.getValue("nativeName")}</p>,
  },
  {
    accessorKey: "altSpellings",
    header: "Alt Spellings",
    cell: ({ row }) => <p>{row.getValue("altSpellings")}</p>,
  },

  {
    accessorKey: "idd",
    header: "IDD",

    cell: ({ row }) => (
      <p className="w-[200px] truncate">{row.getValue("idd")}</p>
    ),
  },
];
