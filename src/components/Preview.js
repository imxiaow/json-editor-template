import { useState, useEffect, useMemo } from "react";


function Preview (props) {
    const entries = useMemo(() => {
      const entries = Object.entries(props.data).sort();
      entries.sort((a, b) => {
        if (a[0] > b[0]) {
          return 1;
        } else if (a[0] === b[0]) {
          return 0;
        } else {
          return -1;
        }
      });
      return entries;
    }, [props.data]);

    return (
      <ul>
        {entries.map(([key, value]) => {
          return (
            <li key={key}>
              <strong>{key}</strong>:{" "}:
              <code>{JSON.stringify(value, null, "  ")}</code>
            </li>
          );
        })}
      </ul>
    );
  };

export default Preview