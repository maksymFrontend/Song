import React, {useState, useMemo, useRef, useEffect, memo} from 'react'



export const FullNameMusis = memo(({originalFileName = '-', artist = '-', enableAnimation = false})=>

  <div className="fullNameMusis">

    <span className={enableAnimation?'ticker':''}>
      {originalFileName}
    </span>

    <br/>

    <span>
      {artist}
    </span>

</div>

)