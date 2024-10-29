import { Fragment } from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const LeadList = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [placeholder, setPlaceholder] = useState("Loading");

  useEffect(() => {
    fetch("api/lead")
      .then((response) => {
        if (response.status > 400) {
          setPlaceholder("Something went wrong!");
          return;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoaded(true);
      });
  }, []);

  return (
    <Fragment>
      <Link to="/create">
        <button>Create New Lead</button>
      </Link>
      {!loaded ? (
        <p>{placeholder}</p>
      ) : (
        <ul>
          {data.map((contact) => (
            <li key={contact.id}>
              {contact.name} - {contact.email}
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default LeadList;
