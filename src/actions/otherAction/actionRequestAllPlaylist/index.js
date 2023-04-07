import { actionAllPlaylist } from "../actionAllPlaylist"
import { actionFeedAllPlaylists } from "../../feed"

export const actionRequestAllPlaylist = (sortType) => 
	async(dispatch, getState) =>{

		const countPlaylists = getState().feed?.allPlaylists?.length || 0

		let newPlaylists = await dispatch(actionAllPlaylist({mySkip: countPlaylists, ...sortType}))

		await dispatch(actionFeedAllPlaylists(newPlaylists))

	}