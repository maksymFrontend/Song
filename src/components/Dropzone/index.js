import { useDropzone } from 'react-dropzone'
import { actionSetAvatar } from '../../actions/otherAction/actionSetAvatar'
import { actionSetTrack } from '../../actions/otherAction/actionSetTrack'
import {Provider, connect} from 'react-redux'
import React, {useState, useMemo, useRef, useEffect, memo} from 'react'
import { PopUpWindow } from '../PopUpWindow'


const Dropzone = memo(({props, onLoad, closeWindow}) => {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    
    useEffect(()=>{

		(
			async() => {
				if(acceptedFiles.length){
					await onLoad(acceptedFiles)
					closeWindow()
				}
			}
		)()

    },[acceptedFiles.length])
  
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        	{file.path} - {file.size} bytes
        </li>
    ));
  
    return (
      <PopUpWindow closeWindow={closeWindow}>
		<section className="container">
			<div {...getRootProps({className: 'dropzone'})} className='containerZona'>
				<input {...getInputProps()} />
				<span className="material-icons-round">cloud_upload</span>
				<p>Drag 'n' drop some files here, or click to select files</p>
				<aside>
					<h4>Files</h4>
					<ul className='scrollUl'>
						{files}
					</ul>
				</aside>
			</div>
		</section>
      </PopUpWindow>
    );
})


export const CLoadAvatar = connect(null, 
                                        {
                                          onLoad:actionSetAvatar
                                        })(Dropzone)

export const CAddTrack = connect(null, 
                                      {
                                        onLoad:actionSetTrack
                                      })(Dropzone)