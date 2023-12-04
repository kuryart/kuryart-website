import { ReactNode } from "react";

export function Hero({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="hero bg-base-200 px-16 2xs:px-4 xs:px-8 sm:px-32 py-24 sm:rounded-3xl">
      <div className="hero-content text-center">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-4xl">{title}</h1>
          {children}
        </div>
      </div>
    </section>
  );
}
