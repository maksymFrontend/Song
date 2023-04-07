import { actionAllMyPlaylist } from "../actionAllMyPlaylist"
import { actionFeedAllMyPlaylists } from "../../feed"

export const actionRequestAllMyPlaylist = (sortType) => 
	async(dispatch, getState) =>{

		const countPlaylists = getState().feed?.allMyPlaylists?.length || 0

		let newPlaylists = await dispatch(actionAllMyPlaylist({mySkip: countPlaylists, ...sortType}))

		await dispatch(actionFeedAllMyPlaylists(newPlaylists))

	}