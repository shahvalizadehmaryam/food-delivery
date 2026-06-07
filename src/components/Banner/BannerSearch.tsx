"use client";

import { useState } from "react";

export default function BannerSearch() {
  const [postcode, setPostcode] = useState("");

  function handleSubmit(event: FormEventHandler<HTMLFormElement>) {
    event.preventDefault();
    // TODO: wire up postcode lookup
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm  rounded-full border border-border bg-white shadow-sm"
    >
      <label htmlFor="hero-postcode" className="sr-only">
        Postcode
      </label>
      <input
        id="hero-postcode"
        type="text"
        value={postcode}
        onChange={(event) => setPostcode(event.target.value)}
        placeholder="e.g. EC4R 3TE"
        className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-secondary outline-none placeholder:text-muted-foreground"
      />
      <button
        type="submit"
        className="shrink-0 bg-primary rounded-full px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
      >
        Search
      </button>
    </form>
  );
}
