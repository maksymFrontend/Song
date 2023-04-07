import { useState, memo, useMemo} from "react"

import { SelectionGroup  } from '../SelectionGroup'
import { MySelectWithIcons } from '../MySelectWithIcons'
import { QuickSortButtons } from '../QuickSortButtons'


const sortNumberTracks = 
[
  {
    name:'From largest to smallest',
    value:-1
  },
  {
    name:'From smallest to largest',
    value:1
  }
]


const sortByData = 
[
  {
      name:'From new before old',
      value:-1
  },
  {
      name:'From old before new',
      value:1
  }
]


const sortByName = 
[
  {
      name:'From A before Z',
      value:1
  },
  {
      name:'From Z before A',
      value:-1
  }
]



export const SortingBlock = memo(({setSort})=>{

  const quickSortButton = useMemo(() => [
      {
        name:'New',
        onClick: () => setSort({sortName:'_id',sortValue:-1})
      },
      {
        name:'Old',
        onClick: () => setSort({sortName:'_id',sortValue:1})
      }
    ], [setSort])


    const changeSort = (type) =>{
      return (e) => setSort({sortName:type, sortValue:e.target.value})
    }




  return(
    <>
      <SelectionGroup>
        
        <MySelectWithIcons icons='font_download' name='Sort by name' onChange={changeSort('name')} options={sortByName}/>

        <MySelectWithIcons icons='calendar_month' name='Sort by date' onChange={changeSort('_id')} options={sortByData}/>

        <MySelectWithIcons icons='library_music' name='Number of tracks' onChange={changeSort('tracks')} options={sortNumberTracks}/>
        
      </SelectionGroup>

      <div className="headerTypeTwo cluesGroup">
          <div>For You:</div>
          <QuickSortButtons buttons={quickSortButton}/>
      </div>
    </>
  )

})





