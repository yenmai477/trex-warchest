import React from "react";
import { AuthCheck } from "../components/Auth";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const { BUILD } = siteConfig.customFields;
  return BUILD > 0 ? <>{children}</> : <AuthCheck children={children} />;
}
