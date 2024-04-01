"use client";

import { Card, CardHeader } from "../ui/card";
import { Header } from "./headers";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonRef: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonRef,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      {children}
    </Card>
  );
};
