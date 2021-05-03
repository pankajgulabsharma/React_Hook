import React, { forwardRef } from "react";

function Ref(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(Ref);
