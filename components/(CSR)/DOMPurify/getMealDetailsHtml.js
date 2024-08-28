"use client"; // Client-side only
import classes from "./getMealDetailsHtml.module.css";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

// This component will sanitize and render the HTML on the client side
export default function SanitizedHtml({ rawHTML }) {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Sanitize the raw HTML content
      const sanitized = DOMPurify.sanitize(rawHTML);
      setSanitizedHTML(sanitized);
    }
  }, [rawHTML]);

  return (
    <p
      className={classes.instructions}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></p>
  );
}
