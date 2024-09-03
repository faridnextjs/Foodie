"use client"; // Client-side only
import classes from "./getMealDetailsHtml.module.css";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

// This component will sanitize and render the HTML on the client side
export default function SanitizedHtml({ rawHTML }) {
  const [sanitizedHTML, setSanitizedHTML] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // Sanitize the raw HTML content
        let sanitized = DOMPurify.sanitize(rawHTML);
        sanitized = sanitized.replace(/\n/g, "<br/>");

        setSanitizedHTML(sanitized);
      } catch (error) {
        console.error("Error sanitizing HTML:", error);
      }
    }
  }, [rawHTML]);

  return (
    <p
      className={classes.instructions}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    ></p>
  );
}
