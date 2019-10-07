import React from "react";
import { arrayOf, obj, objectOf, shape, string, bool } from "prop-types";

const StatusComponent = data => {
  return (
    <div>
      <h2>Provider {data.provider}</h2>
      <div>
        <p>Pending: {data.pending ? "Pending" : "Complete"}</p>
      </div>
      <div>
        <h3>Statuses</h3>
        {data.statuses.map((item, i) => {
          return (
            <div key={i}>
              {item.name}: {item.status ? "Operational" : "Service down"}
            </div>
          );
        })}
      </div>
    </div>
  );
};

StatusComponent.propTypes = {
  data: arrayOf(
    shape({
      provider: string,
      statuses: arrayOf(
        shape({
          name: string,
          status: bool
        })
      )
    })
  )
};
export default StatusComponent;
