import {Provider, connect} from 'react-redux'
import { actionAllNecessaryData } from '../../actions/otherAction/actionAllNecessaryData'
import { CPageHome } from '../Account/PageHome'
import { CPageMySong } from '../Account/PageMySong'
import { CPageSearch } from '../Account/PageSearch'
import { CPageUser } from '../Account/PageUser'
import { CPlaylistInside } from '../../components/PlaylistInside'
import { CFindMusicInPlaylist } from '../../components/FindMusicInPlaylist'
import { CActualPlaylist } from '../../components/ActualPlaylist'
import { CMusicalPlayer } from '../../components/MusicalPlayer'
import {Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import React, {useState, useMemo, useRef, useEffect} from 'react'
import { AccountHeader } from '../../components/AccountHeader'
import { history } from '../../helpers/index'
import { MainBlock } from '../../components/MainBlock'





const Account = ({idUser, allNecessaryData}) =>{
  
    useEffect(() => allNecessaryData(idUser), [idUser])

    return(
      <>  
          <MainBlock id="accountHeader">
            <AccountHeader />
          </MainBlock>
  
          <MainBlock id="accountMainBlock">
            <Switch>
              <Route path="/account/home" exact component={CPageHome} />
              <Route path="/account/MySong" exact component={CPageMySong} />
              <Route path="/account/search" exact component={CPageSearch} />
              <Route path="/account" exact component={CPageUser} />
              <Route path="/account/pleylist/:id" exact component={CPlaylistInside} />
            </Switch>     
          </MainBlock>
  
  
          <MainBlock id="accountPlaylist">
       
              <CFindMusicInPlaylist/>
              <CActualPlaylist/>              
              <CMusicalPlayer/>
  
          </MainBlock>
      </>
    )
  
}



export const CAccount = connect(state=>(
                                        {
                                          idUser:state?.auth?.sub?.id
                                        }),
                                        {
                                          allNecessaryData:actionAllNecessaryData
                                        })(Account)