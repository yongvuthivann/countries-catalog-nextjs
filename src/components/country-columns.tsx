"use client";

import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";

export const countryColumns: ColumnDef<ITransformCountry>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <p className="text-xs md:text-sm">{row.getValue("name")}</p>
    ),
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
    cell: ({ row }) => (
      <p className="text-xs md:text-sm">{row.getValue("cca2")}</p>
    ),
  },

  {
    accessorKey: "cca3",
    header: "CCA3",
    cell: ({ row }) => (
      <p className="text-xs md:text-sm">{row.getValue("cca3")}</p>
    ),
  },

  {
    accessorKey: "nativeName",
    header: "Native Name",
    cell: ({ row }) => (
      <p className="text-xs md:text-sm">{row.getValue("nativeName")}</p>
    ),
  },
  {
    accessorKey: "altSpellings",
    header: "Alt Spellings",
    cell: ({ row }) => (
      <p className="text-xs md:text-sm">{row.getValue("altSpellings")}</p>
    ),
  },

  {
    accessorKey: "idd",
    header: "IDD",

    cell: ({ row }) => (
      <p className="w-[200px] truncate text-xs md:text-sm">
        {row.getValue("idd")}
      </p>
    ),
  },
];
