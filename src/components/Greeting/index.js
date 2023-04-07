import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'


export const Greeting = memo(({name=''}) => 

    <>
        <h1 className='headerTypeThree'>
            Welcome, {name}!
        </h1>
        
        <div className="headerTypeFour">
            Customize your privacy and security
            <br/>
            settings to make your experience with Song services even better. 
            <Link to={'/'}>
                Read more…
            </Link>
        </div>
     </>
    
  
)
