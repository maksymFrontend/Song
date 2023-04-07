import { memo } from "react";


export const SelectionGroup = memo(({children}) => 

  <div className="input-group mb-3 form-control inputGroup filterGroup">
    {children}
  </div>

)