import React, { forwardRef } from "react";

function UseRef3(props, ref) {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(UseRef3);
