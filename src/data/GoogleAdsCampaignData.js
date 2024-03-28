import React, { useState } from "react";
import Papa from "papaparse";


const GoogleAdsCampaignData = () => {
  const [data, setData] = useState({});
  Papa.parse("https://docs.google.com/spreadsheets/d/1TAo2lgtmLTpBhtDNTAWsPytgCHBXOWQB6RdyToe2MsY/edit#gid=1101840671/pub?output=csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data);
    },
  });
  const campaign = Array.from(data);
  return (
    <ul>
      {campaign.map((data) => (
        <li key={data.Campaign}>
          {data.Campaign} ({data.Year}) - Rating {data.Impressions}
        </li>
      ))}
    </ul>
  );
};
export default GoogleAdsCampaignData;