"use client";
import { useTranslation } from "@/i18n/client";
import { useParams } from "next/navigation";
import React from "react";

function Homeage() {
  const { lng } = useParams();
  const { t } = useTranslation(lng as string);
  return <div className="mt-20 ">{t("home")}</div>;
}

export default Homeage;
