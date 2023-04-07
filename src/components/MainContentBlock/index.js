import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { MyInputWithIcons } from '../MyInputWithIcons'
import { NewPlaylistBlock } from '../NewPlaylistBlock'
import { SortingBlock } from '../SortingBlock'
import { PlaylistContainer } from '../PlaylistContainer'
import { CTrackBlock } from '../TrackBlock'

export const MainContentBlock = memo(({addPlaylist = [], allPlaylist, clearAllPlaylists, filter, advancedSearch, requestAllPlaylist, allTracksSearch}) => {
  
  const [sort, setSort] = useState({})
  const searchFilter = (e) =>{
    filter({searchText:e})
  }

  return(
    <>  
      {advancedSearch && <MyInputWithIcons 
                                          onChange={searchFilter}
                                          icons='search'
                                          name='Advanced search'
                                          />}

      {!advancedSearch && <SortingBlock setSort={setSort}/>}

      <div id="allPlaylistsBlock" className="playlists">

          <div>
            {!advancedSearch?'All playlists':'Search results'}
          </div>
          
          {addPlaylist && <NewPlaylistBlock/>}

          <PlaylistContainer 
            sort={sort} 
            advancedSearch={advancedSearch}
            allPlaylist={allPlaylist} 
            clearAllPlaylists={clearAllPlaylists} 
            requestAllPlaylist={requestAllPlaylist}
          />

          {advancedSearch && allTracksSearch?.map((track) => <CTrackBlock 
                                                                          key={track._id} 
                                                                          track={track} 
                                                                          trackNow={track} 
                                                                          playlist={{tracks:[track]}}
                                                              />)}
          
      </div>
    </>
  )
})




